import { useEffect, useRef, useState } from "react";
import HeaderWrapper from "../template/HeaderWrapper";

var options = { mimeType: "video/webm; codecs=vp9" };

export default function CameraAccess() {
	const [isCameraAccessGranted, setIsCameraAccessGranted] = useState<boolean>(false)
	const [isRecording, setIsRecording] = useState<boolean>(false)
	const videoRef = useRef<HTMLVideoElement>(null)
	const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
	const [recordingChunk, setRecordingChunk] = useState<Array<Blob>>([])
	const [localStream, setLocalStream] = useState<MediaStream | null>(null);

	useEffect(() => {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({ video: true })
				.then(stream => {
					if (videoRef.current) {
						videoRef.current.srcObject = stream
						setLocalStream(stream)
						setMediaRecorder(new MediaRecorder(stream, options))
						setIsCameraAccessGranted(true)
					}
				}).catch(error => {
					console.error(error)
					setIsCameraAccessGranted(false)
				})
		}
	}, [])

	const handleDataAvailable = (recording: BlobEvent) => {
		const { data } = recording
		if (data.size > 0) {
			setRecordingChunk((prev) => ([...prev, data]))
			console.log("DATA::", data);
		}
	}

	const handleStartRecordingButtonClick = () => {
		if (mediaRecorder) {
			mediaRecorder.addEventListener("dataavailable", handleDataAvailable);
			mediaRecorder.start(1000);
			setIsRecording(true);
		}
	}

	const handleStopRecordingButtonClick = () => {
		if (mediaRecorder) {
			mediaRecorder.stop();
			setIsRecording(false);
			const blob = new Blob(recordingChunk, {
				type: 'video/webm; codecs=vp9'
			})
			const url = URL.createObjectURL(blob);

			if (videoRef.current) {
				videoRef.current.srcObject = null
				videoRef.current.pause()
				localStream && localStream.getTracks().forEach(track => track.stop())
				videoRef.current.src = url
				videoRef.current.controls = true
				videoRef.current.play()
			}
		}
	}

	return (
		<HeaderWrapper>
			<div className="w-full" >
				<video ref={videoRef} src="" className="mx-auto w-8/12 rounded-2xl shadow-xl" autoPlay muted  ></video>
				{isCameraAccessGranted && <ActionButton
					handleStartRecodringButtonClick={handleStartRecordingButtonClick}
					isRecording={isRecording}
					handleStopRecodringButtonClick={handleStopRecordingButtonClick}
				/>}
			</div>
		</HeaderWrapper>
	)
}

interface ActionButtonProps {
	handleStartRecodringButtonClick: () => void
	handleStopRecodringButtonClick: () => void
	isRecording: boolean
}

function ActionButton({ handleStartRecodringButtonClick, isRecording, handleStopRecodringButtonClick }: ActionButtonProps) {
	return (
		<>
			<div className="flex justify-center my-3" >
				{!isRecording && <button onClick={handleStartRecodringButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
					Start Recording
				</button>}
				{isRecording && <button onClick={handleStopRecodringButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
					Stop Recording
				</button>}
			</div>
		</>
	)
}
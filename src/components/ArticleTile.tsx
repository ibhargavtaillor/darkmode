
interface ArticleTileProps {
	number: number
}
const ArticleTile = ({ number }: ArticleTileProps) => {

	return (
		<div className='my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ' >
			<article className="overflow-hidden rounded-lg shadow-lg">
				<a href="#">
					<img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
				</a>
				<header className="flex items-center dark:bg-white  justify-between leading-tight p-2 md:p-4 dark:bg-whit ">
					<h1 className="text-lg">
						<a className="no-underline hover:underline text-black" href="#">
							Article Title { number }
						</a>
					</h1>
					<p className="text-grey-darker text-sm dark:text-black">
						11/{number}/19
					</p>
				</header>
				<footer className="flex items-center justify-between dark:bg-white leading-none p-2 md:p-4">
					<a className="flex items-center no-underline hover:underline text-black " href="#">
						<img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
						<p className="ml-2 text-sm">
							Author Name
						</p>
					</a>
					<a className="no-underline text-grey-darker hover:text-red-dark" href="#">
						<span className="hidden">Like</span>
						<i className="fa fa-heart"></i>
					</a>
				</footer>
			</article>
		</div>
	)
}

export default ArticleTile;
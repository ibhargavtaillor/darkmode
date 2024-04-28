
interface NavigationbarProps {
    changeDarkMode: () => void,
    isDarkMode: boolean
}

export default function Navigationbar({ changeDarkMode, isDarkMode }: NavigationbarProps) {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto mt-6 p-4">
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>Light</li>
                        <li>
                            <div className="flex items-center justify-center">
                                <label className="switch">
                                    <input type="checkbox" onChange={changeDarkMode} checked={isDarkMode} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </li>
                        <li>Dark</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
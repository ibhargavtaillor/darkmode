import React from "react";
import Navigationbar from "../components/Navigationbar/Navigationbar";
import useDarkSide from "../hooks/useDarkMode";

interface HeaderWrapperProps {
    children: React.ReactNode
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
    const [colorTheme, setTheme, isDarkMode] = useDarkSide()

    const changeDarkMode = () => {
        setTheme(colorTheme);
    }

    return (
        <main className="container mx-auto px-4 md:px-12 dark:text-white sm:w-12/12 md:w-12/12 lg:w-10/12" >
            <Navigationbar changeDarkMode={changeDarkMode} isDarkMode={isDarkMode}  />
            {children}
        </main>
    )
}
import { useEffect, useState } from 'react';

export type ColorThemeType = 'light' | 'dark';

export default function useDarkMode(): [ColorThemeType, React.Dispatch<React.SetStateAction<ColorThemeType>>, boolean] {
    const [theme, setTheme] = useState<ColorThemeType>(localStorage.getItem('theme') as ColorThemeType);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // save theme to local storage
        localStorage.setItem('theme', theme);
        setIsDarkMode((prev) => {
            colorTheme === 'dark' ? prev = false : prev = true;
            return prev;
        })
    }, [theme, colorTheme]);

    return [colorTheme, setTheme, isDarkMode];
}

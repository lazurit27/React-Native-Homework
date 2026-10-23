import { ThemeContext } from "@/hooks/use-theme"
import { ThemeType } from "@/types/theme-types"
import { useState } from "react"
import { useColorScheme as useSystemColorScheme } from "react-native"

interface ThemeProviderProps {
    children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [appTheme, setAppTheme] = useState<ThemeType>("system")
    const systemColorScheme = useSystemColorScheme()

    const toggleTheme = (theme: ThemeType) => {
        setAppTheme(theme)
    }
    const getColorScheme = (): "light" | "dark" => {
        if (appTheme === "light") return "light";
        if (appTheme === "dark") return "dark";
        // For "system" or "auto", use the system color scheme
        return systemColorScheme === "dark" ? "dark" : "light";
    };

    return (
        <ThemeContext.Provider value={{
            theme: appTheme,
            colorScheme: getColorScheme(),
            toggleTheme: toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )

}
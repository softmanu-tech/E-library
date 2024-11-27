"use client";

import theme from "tailwindcss/defaultTheme";
import {ThemeProvider} from "next-themes";
import {ReactNode} from "react";

export function AppProviders({children}: { children: React.ReactNode }) {

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}
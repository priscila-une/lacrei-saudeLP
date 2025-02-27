'use client'

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme"
import StyledComponentsRegistry from "./registry";

export default function ThemeClient({ children }: {children: ReactNode}){
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    )
}
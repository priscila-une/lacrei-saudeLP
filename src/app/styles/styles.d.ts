import "styled-components"

declare module "styled-components" {
    export interface DefatultTheme {
        name: string;
        text: {
            invert400: string;
            heading400: string;
            body400: string;
            helper400: string;
            accent400: string;
            hover400: string;
            success400: string;
            pressed400: string;
            info400: string;
            info500: string;
            warning400: string;
            error400: string;
            disabled200: string;
            disabled400: string;
        },
        background: {
            default400: string;
            disabled400: string;
            disabled500: string;
            high200: string;
            accent100: string;
            accent200: string;
            accent300: string;
            accent400: string;
            accent500: string;
            accent600: string;
        },
        size: {
            headlinexl: string;
            headlinelg: string;
            headlinebase: string;
            headlinesm: string;
            textxl: string;
            textbase: string;
            textsm: string;
            textxs: string;
        }
    }
}
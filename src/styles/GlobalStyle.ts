import { globalCss } from "@stitches/react";

export const GlobalStyle = globalCss({
    '*':{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },
    '*, body, input, button':{
        fontFamily: 'Poppins, sans-serif',
        outline: 'none',
    }
})
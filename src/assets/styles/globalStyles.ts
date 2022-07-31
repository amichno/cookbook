import { createGlobalStyle } from "styled-components";

export interface WraperProps{
    theme:{
        colors:{
            font:string,
            backGround:string,
            boxBackGround:string,
            shadow:string,
          }
    }
}

export const GlobalStyle = createGlobalStyle<WraperProps>`

    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nunito'
    }

    body{
        width:100vw;
        height: 100%;
        background-color: ${({theme})=>theme.colors.backGround};
    }
`
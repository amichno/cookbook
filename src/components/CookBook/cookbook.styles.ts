import styled from "styled-components";

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

export const Wraper = styled.div<WraperProps>`
    width:90%;
    height:100%;
    margin-left:auto;
    margin-right: auto;
    background-color: ${({theme})=>theme.colors.backGround};
    color: ${({theme})=>theme.colors.font}
`
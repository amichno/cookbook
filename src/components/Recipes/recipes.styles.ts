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

export interface ParagraphProps{
    isFirst?:boolean;
    isBig?:boolean;
}

export const SectionWraper = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
`

export const Recipe = styled.div<WraperProps>`
    flex:2 2 20rem;
    max-width: 25rem;
    height: 18rem;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
    padding: 1rem 1rem;
    background-color: ${({theme})=>theme.colors.BoxBackGroundColor};
    box-shadow: 0px 0px 8px 2px ${({theme})=>theme.colors.shadow};
    border: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-size: 0.8rem;
    overflow-y: auto;
`

export const Paragraph = styled.p<ParagraphProps>`
    font-weight: ${({isFirst})=>isFirst?"600":"300"};
    margin-top: 0.5rem;
    font-size:  ${({isFirst})=>isFirst?"1.8rem":"1rem"};
`
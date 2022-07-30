import styled from "styled-components";

export const SectionWraper = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
`

export const Recipe = styled.div`
    flex:2 2 20rem;
    width: 20rem;
    height: 20rem;
    margin-left: 5%;
    margin-right: 5%;
    background-color: ${({theme})=>theme.colors.BoxBackGroundColor};
    box-shadow: 0px 0px 8px 2px ${({theme})=>theme.colors.Shadow};
    border: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-size: 0.8rem;
`
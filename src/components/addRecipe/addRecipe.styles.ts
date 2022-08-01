import styled from "styled-components";

export interface AddProps{
    isDescription?:boolean;
    isButton ?:boolean;
}

export const Icon = styled.div`
    width:2rem;
    height:2rem;
    align-content: end;
    position: absolute;
    top:0.5rem;
    left: 0.5rem
`

export interface AddWraperProps{
    theme:{
        colors:{
            font:string,
            backGround:string,
            boxBackGround:string,
            shadow:string,
            addBoxColor:string
          }
    }
}


export const AddRecipeWraper = styled.div<AddWraperProps>`
    width:100%;
    min-width: 2rem;
    min-height: 2rem;
    height: 100%;
    background-color: ${({theme})=>theme.colors.addBoxColor};
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: relative;
`

export const Add = styled.div<AddProps>`
    width:100%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    form{
        label{
            display: block;
            font-size:1rem
            
    }
}
`
export const Label = styled.label`
            display: block;
            font-size:1rem
            
`

export const Input = styled.input<AddProps>`
            width:50rem;
            height: ${({isDescription}) => isDescription?"10rem":"2rem"};
            margin-bottom: 1%;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            border: none;
            &::placeholder{
                padding-left: 0.5rem;
                top:0;
            }
            background-color: ${({isButton})=>isButton?"#55204a":"white"};
            color:${({isButton})=>isButton?"white":"black"};
            font-weight: ${({isButton})=>isButton?"600":"normal"};;
`
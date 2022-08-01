import styled from "styled-components";

export interface AddProps{
    isDescription?:boolean;
    isButton ?:boolean;
}

export const Icon = styled.div`
    width:1rem;
    height:1rem;
    display:inline-block;
    align-content: center;
    position: absolute;
    text-align: feComponentTransfer;
    top:0.1rem;
    left: 0.1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: ${({theme})=>theme.colors.addBoxColor};
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
    width:90%;
    //min-width: 2rem;
    //min-height: 2rem;
    height: fit-content;
    background-color: ${({theme})=>theme.colors.addBoxColor};
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    //padding-top: 2rem;
    //padding-bottom: 2rem;
    position: relative;
    justify-items: center;
    align-items:center;
`

export const Add = styled.div<AddProps>`
    width:100%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    form{
        width:100%;
        padding-top:1rem;
        &.show{
            width:100%;
        }
        &.hide{
            width:0px;
            height: 0px;
            display: none;
        }
        label{
            display: block;
            font-size:1rem
            
    }
}
`
export const Form = styled(Add)`
.show{
        width:100%;
    }
    .hide{
        width:0px;
        height: 0px;
        display: none;
    }
`

export const Label = styled.label`
            display: block;
            font-size:1rem
            
`

export const Input = styled.input<AddProps>`
            width:80%;
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
            font-weight: ${({isButton})=>isButton?"600":"normal"};
            cursor: ${({isButton})=>isButton?"pointer":"auto"};
`
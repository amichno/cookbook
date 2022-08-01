import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddRecipeWraper,
        Add, 
        Input,
        Icon} from "./addRecipe.styles";
import React, { useState } from "react";

export interface Recipe{
    id:number,
    name: string,
    ingredients: string[],
    description: string,
}

export interface AddRecipeProps{
    add:(n:string, i:string[], d:string)=>void;
}


const AddRecipe:React.FC<AddRecipeProps> = ({add}) =>{

    const [name, setName] = useState<string>('');
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [description, setDescription] = useState<string>('');

    const onChangeName=(event:React.FormEvent<HTMLInputElement>)=>{
        setName(event.currentTarget.value);
    };
    const onChangeIngredients=(event:React.FormEvent<HTMLInputElement>)=>{
        let inputText = event.currentTarget.value;
        let arrayOfIngredients = inputText.split(',');
        setIngredients(arrayOfIngredients);
    };
    const onChangeDescription=(event:React.FormEvent<HTMLInputElement>)=>{
        setDescription(event.currentTarget.value);
    };

    const onClickHandler=(event:React.FormEvent<HTMLInputElement>)=>{
        add(name,ingredients,description);
        event.preventDefault();
    };

        return(
            <AddRecipeWraper>
               { /*<Icon><FontAwesomeIcon icon={faPlus} size={"1x"}/></Icon>*/}
               
                <Add>
                    <form  className="show">
                        <label>Name of the recipe</label>
                        <Input name="Name" isDescription ={false} placeholder="Name" onChange={onChangeName}></Input>
                        <label>Ingredients</label>
                        <Input name="Ingredients" 
                                isDescription ={false} 
                                placeholder="Ingredients list (separated by comma)"
                                onChange={onChangeIngredients}></Input>
                        <label>Description</label>
                        <Input name="Description" 
                               isDescription ={true} 
                               placeholder="Recipe description"
                               onChange={onChangeDescription}></Input>
                        <Input isButton ={true} type="submit" onClick={onClickHandler} value ="Add recipe"/>
                    </form>
                </Add>

            </AddRecipeWraper>
        )
}

export default AddRecipe;
import React, { useEffect, useState } from 'react';
import { themeLight } from '../../assets/styles/themeLight';
import { themeDark } from '../../assets/styles/themeDark';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import { Wraper } from './cookbook.styles';
import { ThemeProvider } from 'styled-components';
import Header from '../Header/header.component';
import Section from '../Recipes/recipes.component';
import AddRecipe from '../addRecipe/addRecipe.component';
import { Recipe } from '../Recipes/recipes.styles';
import { createModuleResolutionCache } from 'typescript';

export interface Theme{
  colors:{
    font:string,
    backGround:string,
    boxBackGround:string,
    shadow:string,
  }
}

export interface Recipe{
    id:number,
    name: string,
    ingredients: string[],
    description: string,
}

const CookBook: React.FC = ()=> {

  const [theme, setTheme] = useState<Theme>(themeLight);
  const [modify, setModify] = useState<number>(0);
  const [recipes,setRecipes] =useState<Recipe[]>([{
                                                            id:1,
                                                            name:'One-Pot Enchilada Pasta',
                                                            ingredients:[
                                                                '4 cups uncooked mini penne or other small pasta',
                                                                '4 cups vegetable broth or water',
                                                                '1 can (15 ounces) black beans, rinsed and drained',
                                                                '1 medium sweet yellow pepper, chopped'
                                                                ],
                                                            description:'In a Dutch oven or large skillet, combine the first 9 ingredients. Bring to a boil; reduce heat. Simmer, uncovered, until pasta is al dente and sauce has thickened slightly, 12-15 minutes. Add cheese; stir until melted. Serve with desired toppings.',
                                                            },
                                                            {
                                                                id:2,
                                                                name:'Vegetarian Skillet Lasagna',
                                                                ingredients:[
                                                                    '2 tablespoons olive oil',
                                                                    '2 medium zucchini, halved and sliced',
                                                                    '1/2 pound sliced fresh mushrooms',
                                                                    '1/2 cup chopped onion',
                                                                    '6 no-cook lasagna noodles, broken'
                                                                ],
                                                                
                                                                description:'Heat olive oil in large cast-iron or other ovenproof skillet over medium-high heat. Add zucchini and mushrooms; cook until softened, 2-3 minutes. Add onion and garlic; cook until vegetables are tender, 2-3 minutes. Add pasta sauce, water and seasonings. Stir to combine; add broken noodles. Bring to a boil. Reduce heat; cover and simmer until noodles are tender, about 15 minutes.'
                                                            }]);
    const [newRec, setNewRecipe] = useState<Recipe[]>([])

    /*useEffect(()=>{
        console.log(newRec);
        try {
            let cokolwiek = {"id":newRec[0].id,
                            "name": newRec[0].name,
                            "ingredients": newRec[0].ingredients,
                            "description":newRec[0].description }
            setRecipes(prevState=>([...prevState,cokolwiek]));
            console.log(recipes)
        } 
        catch (error) {console.log(error)}
    },[newRec])*/

  const ChangeTheme = () =>{
        if(theme === themeLight)
            setTheme(themeDark)
        else
            setTheme(themeLight)
  }

  const validation = (name: string, ingredients:string[], description:string) =>{
    let minCharacters = 6;
    let maxCharacters = 300;
    let characters = /[a-zA-Z0-9@#$%^&*]{10,}/;
    //if (RegExp(name)) 
       // console.log("ok");
        //if(string ==="")
  }

  const addRecipe = (name:string,ingredients:string[],description:string) =>{
    let id = recipes.length;
    id++;
    const newRecipe:Recipe = {"id":id,"name":name,"ingredients":ingredients,"description":description};
    validation(name, ingredients, description);
    const newTab = recipes;
    newTab.push(newRecipe);
    setRecipes(newTab);
    //console.log('after');
    //console.log(recipes)
  }

  const ereaseWhiteSpaces=(array:string[]) =>{
        for(let i=0; i<array.length;i++)
            if(array[i]==='') array.pop();
  }

  const UpdateIngredients = (name:string) =>{
    let ingredient=document.getElementsByClassName(`Ingr ${name}`);
    let newTabIngredients:string[]=[];
    let listInString='';
    for(let i =0;i<ingredient.length; i++)
            {
                let currentLine = ingredient[i].innerHTML;
                listInString += currentLine;
            }
    newTabIngredients = listInString.split('<br>');
    ereaseWhiteSpaces(newTabIngredients);
    console.log(newTabIngredients);
    const tab = recipes.filter(item=>{if(item.name===name) {item.ingredients = newTabIngredients}});
  }

  const updateNameRecipe = (name:string)=>{
    let nameDiv=document.getElementById(`name ${name}`);
    recipes.filter(item=>{if(item.name===name) {item.name = nameDiv?.innerHTML!}});
  }

  const updateDescription =(name:string)=>{
    let description=document.getElementById(`descr ${name}`);
    recipes.filter(item=>{if(item.name===name) {item.description = description?.innerHTML!}});
  }

  const updateRecipe = (event:React.MouseEvent<HTMLButtonElement>)=>{
    let currentName = event.currentTarget.name;
    let name=document.getElementById(`name ${currentName}`);
    let ingredient=document.getElementsByClassName(`Ingr ${currentName}`);
    let description=document.getElementById(`descr ${currentName}`);

    console.log(name?.innerHTML);
    if(name?.innerHTML === '')
        alert('Put value')
    else
        updateNameRecipe(currentName);
    console.log(`ingredients ${ingredient}`);

    if(ingredient[0].innerHTML==='')
        alert ("Add some value")
    else
        UpdateIngredients(currentName);
    console.log(`description ${description}`);

    if(description?.innerHTML === '')
        alert('Put value')
    else
        updateDescription(currentName);

    console.log(recipes);
    setModify(0);
  }

  const getId=(name:String) =>{
    let index = recipes.filter(item=>{if(item.name===name){return item.id}});
    setModify(index[0].id);
  }

  const onClickEditRecipe = (event:React.MouseEvent<HTMLButtonElement>)=>{
    let selcetedRecipe = event.currentTarget.name;
    getId(selcetedRecipe);

  }

  const onClickDeleteRecipe = (event:React.MouseEvent<HTMLButtonElement>)=>{
    let selectedRecipe=event.currentTarget.name;
   // console.log(`selected ${selectedRecipe}`);
    let tab = recipes;
    let newTab = tab.filter(item=>{if(item.name==selectedRecipe){return item.id}});
    const index = newTab[0].id-1;
    let wynikowa = tab.slice(0,index);
    let polowa = tab.slice(index+1,tab.length)
    wynikowa.push(...polowa);
    console.log(wynikowa);
   // console.log(tab);
    //tab = tab.filter(item=>{if(item.name!==selectedRecipe){ console.log(`id ${item.id}`); return(tab.splice((item.id),1))}});
    tab = tab.splice(index,1);//ma byc slice
    //console.log('delete');
    console.log(tab);
    setRecipes(wynikowa);
    //console.log(recipes);
  }

  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wraper>
                <Header onClick={ChangeTheme}/> 
                <Section recipes={recipes} 
                         del={onClickDeleteRecipe} 
                         edit={onClickEditRecipe} 
                         modify={modify}
                         update={updateRecipe}/>
                <AddRecipe add={addRecipe}/>
            </Wraper>
        </ThemeProvider>
     </>
  );
}

export default CookBook;

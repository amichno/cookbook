import React, { useEffect, useState } from 'react';
import { themeLight } from '../../assets/styles/themeLight';
import { themeDark } from '../../assets/styles/themeDark';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import { Wraper } from './cookbook.styles';
import { ThemeProvider } from 'styled-components';
import Header from '../Header/header.component';
import Section from '../Recipes/recipes.component';

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
  const [modify, setModify] = useState<number>(-1);
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

  const ChangeTheme = () =>{
        if(theme === themeLight)
            setTheme(themeDark)
        else
            setTheme(themeLight)
    console.log(theme)
  }

  const setModifyRecipe = (id:number) =>{
    setModify(id);
  }

  const DeleteRecipe = (id:number)=>{
    setModify(id);
    console.log(id);
    console.log('ok');
  }

  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wraper>
                <Header onClick={ChangeTheme}/> 
                <Section recipes={recipes} del={DeleteRecipe}/>
            </Wraper>
        </ThemeProvider>
     </>
  );
}

export default CookBook;

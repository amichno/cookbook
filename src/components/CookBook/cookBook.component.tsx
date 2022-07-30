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

const CookBook: React.FC = ()=> {

  const [theme, setTheme] = useState<Theme>(themeLight);

  const ChangeTheme = () =>{
        if(theme === themeLight)
            setTheme(themeDark)
        else
            setTheme(themeLight)
    console.log(theme)
  }

  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wraper>
                <Header onClick={ChangeTheme}/> 
                <Section />
            </Wraper>
        </ThemeProvider>
     </>
  );
}

export default CookBook;

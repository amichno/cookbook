import React, { useEffect, useState } from 'react';
import { themeLight } from '../../assets/styles/themeLight';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import { Wraper } from './cookbook.styles';
import { ThemeProvider } from 'styled-components';
import Header from '../Header/header.component';

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

  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wraper>
                <Header /> 
            </Wraper>
        </ThemeProvider>
     </>
  );
}

export default CookBook;

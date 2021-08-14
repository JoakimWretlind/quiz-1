import { createGlobalStyle } from 'styled-components';
import CinzelD from './fonts/CinzelDecorative.otf'
import CocoLight from './fonts/CocoGothicLight.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'CinzelD';
    src: url(${CinzelD});
    font-display: swap;
  };
  @font-face {
    font-family: 'CocoLight';
    src: url(${CocoLight});
    font-display: swap;
  };

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    font-family: "montserrat", sans-serif;
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;
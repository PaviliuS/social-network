import {createGlobalStyle} from "styled-components";

export const theme = {
  backgroundColor: '',
  blue: '#0077FF',
  white: '#FFFFFF',
  black: '#000000',
}
export const menuOn = {
  width: '250px',
}
export const menuOff = {
  width: '100px',
}

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    font-weight: 400;
    text-decoration: none;
    color: black;
  }
  li{
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  ul{
    margin: 0px;
    padding: 0px;
  }
  body{
    background-color: ${props => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${props => props.theme.textColor};
  }
`;

export const darkTheme = {
  backgroundColor: '#1F2023', //
  textColor: '#F5F5F5',       //
  infoIconColor:'#2D2F34',    //
  iconColor:'#27292D',        //
  accentColor1:'#695CFE',
  accentColor2:'#00c6ff',
  shadowColor:'rgba(0,0,0,0.2)',
  textSizeTitle:'60px',
  textSizeTitleMD:'30px',
  textSizeL:'18px',
  textSizeM:'14px',
  textSizeS:'12px',
  borderRadius:'15px',
} 
export const lightTheme = {   
  backgroundColor: 'white', //white
  textColor: 'black',       //black
  infoIconColor:'#FAFAFA',  //50
  iconColor:'white',      //100 #F5F5F5
  accentColor1:'#695CFE',
  accentColor2:'#00c6ff',
  shadowColor:'rgba(0,0,0,0.2)',
  textSizeTitle:'60px',
  textSizeTitleMD:'30px',
  textSizeL:'18px',
  textSizeM:'14px',
  textSizeS:'12px',
  borderRadius:'15px',
}
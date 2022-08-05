import styled from 'styled-components';

export const Header = styled.header`
    z-index: 100;
    display: flex; 
    width: 100%;
    height: 60px;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    padding: 0px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0373);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
`;

export const Content = styled.div`
    display: flex;
    box-sizing: border-box;
    align-items: center; 
`;

export const Logo = styled.div`
    font-family: 'Roboto';
    font-size: 25px;
    line-height: 16px;
    font-weight: 500;
    display: flex;
    flex: 0 0 auto;
    margin: 0px 10px 0px 10px;
    justify-content: center;
    align-items: center;
`;

export const Adv = styled.div`
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    display: flex; 
    flex-direction: row;
    width: 350px;
    flex: 0 0;
    margin: 0px 0px 0px 0px;
`;

export const ButtonLightDarkMode = styled.button`
    background-color: white;
    font-size: 30px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 0px;
    &:hover{
        color: ${props => props.theme.hoverEffect};
        transition: 0.1s;
    }
`;
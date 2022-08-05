import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    background-color: ${props=> props.theme.backgroundColor};
    flex-direction: row;
    width: 100%;

`;

export const Menu = styled.div`
    background-color: ${props=> props.theme.body};
    display: flex;
    flex: 0 0 auto;
    width: ${props=> props.menu.width};
    opacity: ${props=> props.menu.opacity};
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    transition: 0.3s;
    border-right: 1px solid rgba(0, 0, 0, 0.0373);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
   
`;
export const Route = styled.div`  
    display: flex;
    width: 100%;
    height: 100%;

`;
export const App = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: inherit;
    background-color: ${props=> props.theme.backgroundColor};
`;

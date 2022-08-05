import styled from 'styled-components';

export const Link = styled.div`
    display: flex; 
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    margin: 0px 0px 0px 0px;
    flex-wrap: nowrap;
    border-radius: 15px;
    color: ${props=>props.theme.textColor};
    margin-bottom: 5px;


    &:hover{
        background-color: #695CFE;
        transition: 0.1s ease;
        color: white;
    }




`;
export const ActiveLink = styled.div`
    display: flex; 
    width: 100%;
    height: 50px;
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
    margin: 0px 0px 0px 0px;
    flex-wrap: nowrap;
    color: white;
    background-color: #695CFE;
    margin-bottom: 5px;



`;
export const Icon = styled.div`

display: flex;
width: 50px;
flex: 0 0 auto;

justify-content: center;
align-items: center;

 font-size: 20px;
 margin: 0px 0px 0px 0px;
 color: inherit;
`;
export const Text = styled.div`
    color: inherit;
    display: flex;
    flex-wrap: nowrap;
    flex: 0 0 auto;
    font-family: 'Roboto';
    display:flex;
    flex-wrap: nowrap;
    font-size: 14px;

`;



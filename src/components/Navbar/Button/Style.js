import styled from 'styled-components';

export const Button = styled.div`
    display: flex; 
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    margin: 0px 0px 0px 0px;
    flex-wrap: nowrap;
    border-radius: 15px;
    color: ${props=>props.theme.color};


    &:hover{
        background-color: #695CFE;
        color: white;
        transition: 0.1s ease;
    }
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
    display: flex;
    flex-wrap: nowrap;
    flex: 0 0 auto;
    font-family: 'Roboto';
    display:flex;
    flex-wrap: nowrap;
    font-size: 14px;
    color: inherit;
`;



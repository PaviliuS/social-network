import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    box-sizing: border-box;
    overflow: hidden;
    align-items: center;
`;

export const Button= styled.button`
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
    font-size: 30px;
    background-color: inherit;
    margin: 0px 15px;
    border-radius: 10px;
    border: 0;
    color: ${props=>props.theme.textColor};
    cursor: pointer;
    font-family: 'Roboto';
    font-weight: 500;
    &:hover{
    transition: 0.1s;
    color: ${props=>props.theme.accentColor1};
    }
`;
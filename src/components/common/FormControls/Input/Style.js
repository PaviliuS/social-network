import styled from "styled-components";

export const Content = styled.div`    
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction: column;
    border-radius: 15px;
`;

export const Input = styled.input`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    flex: 1 1 auto;
    width: 100%; 
    height: 100%;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Roboto';
    resize: none;
    padding: 13px;
    box-sizing: border-box;
    background-color: ${props=>props.theme.backgroundColor};
    border: 0px;
    color: ${props=>props.theme.textColor};
    &:focus{
        outline: 0px;
        border: 0px;
    }
    &::-webkit-scrollbar
    {
        background-color: rgba(0, 0, 0, 0.1);
        width: 10px;
        overflow: hidden;
    }
    &::-webkit-scrollbar-thumb
    {
        background-color: #695CFE;
        border-radius: 10px;
    }
`;

export const Error = styled.span`    
    font-size: 12px;
    font-weight: 500;
    display: flex;
    position: absolute;
    bottom: 10px;
    background-color: red;
    right: 10px;
    border-radius: 5px;
    padding: 2px 10px;
    color: white;
`;
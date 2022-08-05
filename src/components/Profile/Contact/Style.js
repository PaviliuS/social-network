import styled from "styled-components";

export const Link = styled.a`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
`;

export const Contact = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    height: 50px;   
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.borderRadius};
    box-sizing: border-box;
    padding:10px;
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};

    &:hover{
        background-color: ${props => props.color};
        transition: 0.3s ease;
        color: white;
    }
    cursor: pointer;
`;

export const Icon = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 500;
`;
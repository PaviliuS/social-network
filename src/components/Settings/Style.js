import styled from "styled-components";

export const Settings = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    background-color: ${props => props.theme.backgroundColor};
    transition: 0.1s;
`;

export const Content = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 320px;
    height: ${props => props.height}px;
    flex-direction: column;
    box-sizing: border-box;
`;

export const SettingsTitle = styled.div`
    padding: 15px 15px 0px 15px;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 50px;
    align-items: center;
    font-size: 25px;
    color: ${props => props.theme.textColor};
`;

export const Form = styled.form`
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px 15px 15px 15px;
    overflow: scroll;
    &::-webkit-scrollbar { 
        width: 0;
        height :0;
    }
`;

export const FormItem = styled.div`
    font-weight: 500;
    display: flex;
    flex-direction: column;
    margin: 0px 0px 10px 0px;
    width: 100%;
    height: 90px;
    padding: 5px 5px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor} ;
    background-color: ${props => props.theme.iconColor};
`;

export const FormItemJob = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 0px 10px 0px;
    width: 100%;
    height: 35px;
    padding: 5px 5px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor} ;
    background-color: ${props => props.theme.iconColor};

`;

export const FormItemTextJob = styled.div`
    font-weight: 500;
    padding: 0px 0px 0px 5px;
    margin: 0px 0px 5px 0px;
    color: ${props => props.theme.textColor};
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    font-size: 14px;
`;

export const FormItemText = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    height: 30px;
    align-items: center;
    color: ${props => props.theme.textColor};
    font-size:${props => props.theme.textSizeM};
    padding: 0px 0px 0px 5px;
`;

export const Button = styled.button`
    display: flex;
    flex: 0  0 auto;
    border: 0px;
    width: 100%;
    height: 50px;
    border-radius:${props => props.theme.borderRadius};
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.accentColor1};
    color: white;
    cursor: pointer;
    &:hover{
        color: white;
        opacity: 0.91;
        background-color: ${props => props.theme.accentColor1};
        transition: 0.1s ease;
    }
`;
import styled from "styled-components";

export const Login = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-top: 100px;
    border-radius: ${props => props.theme.borderRadius};
    background-color:  ${props => props.theme.iconColor};
    box-shadow: 0px 0px 3px  ${props => props.theme.shadowColor};
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: ${props => props.theme.textSizeL};
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
`;

export const FieldLogin = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 3px  ${props => props.theme.shadowColor};
    margin-bottom: 10px;
`;

export const FieldPassword = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 3px  ${props => props.theme.shadowColor};
    margin-bottom: 10px;
`;

export const FieldRemember = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    background-color:   ${props => props.theme.backgroundColor};
    box-shadow: 0px 0px 3px  ${props => props.theme.shadowColor};
    margin-bottom: 10px;
`;

export const FieldRememberText = styled.div`
    display: flex;
    flex: 1 1 auto;
    font-size: ${props => props.theme.textSizeM};  
    width: 100%;
    height: 100%;
`;

export const FieldCaptcha = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 3px  ${props => props.theme.shadowColor};
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    & img{
        margin-bottom: 10px;
    }
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
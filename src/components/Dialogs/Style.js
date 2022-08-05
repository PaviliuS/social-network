import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: ${props=>props.height}px;
    flex-direction: row;
    background-color: ${props=>props.theme.backgroundColor};
    transition: 0.1s;
`;

export const Dialogs = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 320px;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 0px;
`;

export const DialogsName = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 50px;
    padding: 0px 15px;
    align-items: center;
    font-size: 25px;
    color: ${props=>props.theme.textColor};
`;

export const DialogsList = styled.div`
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    padding: 1px 15px;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 10px;
    overflow: scroll;
    &::-webkit-scrollbar { 
        width: 0;
        height :0 ;
    }
`;

export const Messages = styled.div`
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
`;

export const MessagesName = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 50px;
    align-items: center;
    font-size: 25px;
    color: ${props=>props.theme.textColor};
`;

export const MessagesList = styled.div`
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 10px;
    overflow: scroll;
    &::-webkit-scrollbar { 
        width: 0;
        height :0 ;
    }
`;

export const Form = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 10%;
    margin-top: 15px;
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    background-color: ${props=>props.theme.iconColor};
    border-radius: 10px;
    flex-direction: row;
`;
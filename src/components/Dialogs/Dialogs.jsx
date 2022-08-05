import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';
import React from 'react';
import * as Style from './Style';

const Dialogs = ({ dialogs, messages, addMessage, height, width }) => {
    let dialogsElements = dialogs.map(element => {
        return <Dialog key={`dialog${element.id}`} id={element.id} name={element.name} message={element.message}></Dialog>;
    });

    let messagesElements = messages.map(element => {
        return <Message key={`message${element.id}`} name={element.name} text={element.text} time={element.time}></Message>;
    });

    return (
        <Style.Content height={height}>
            <Style.Dialogs height={height}>
                <Style.DialogsName>
                    Чаты
                </Style.DialogsName>
                <Style.DialogsList height={height}>
                    {dialogsElements}
                </Style.DialogsList>
            </Style.Dialogs>
            <Style.Messages>
                <Style.MessagesName>
                
                </Style.MessagesName>
                <Style.MessagesList>
                    {messagesElements}
                </Style.MessagesList>
                <Style.Form>
                    <MessageForm addMessage={addMessage}></MessageForm>
                </Style.Form>
            </Style.Messages>
        </Style.Content>
    );
}

export default Dialogs;
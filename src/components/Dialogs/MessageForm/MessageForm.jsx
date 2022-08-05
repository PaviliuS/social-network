
import React from 'react';
import { Form, Field } from 'react-final-form';
import { required, maxLengthCreator, composeValidators } from '../../../utils/validators/validators';
import Textarea from '../../common/FormControls/Teaxtarea/Textarea';
import * as Style from './Style';
import {VscPlay} from 'react-icons/vsc';

const MessageForm = (props) => {
    let onSubmit = (values) => {
        props.addMessage(values.newMessage);
        values.newMessage = '';
    }
    let validate = values => {
        console.log(values);
    }
    
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <Style.Form onSubmit={handleSubmit}>
                    <Field validate={composeValidators(required, maxLengthCreator(100))} name="newMessage" placeholder='Сообщение'  component={Textarea}></Field>
                    <Style.Button><VscPlay></VscPlay></Style.Button>
                </Style.Form>
            )}
        />
    );
}

export default MessageForm;
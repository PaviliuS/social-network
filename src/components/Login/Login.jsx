import React from 'react';
import * as Style from './Style';
import { Form, Field } from 'react-final-form';
import CheckBox from '../common/FormControls/CheckBox/CheckBox';
import Input from '../common/FormControls/Input/Input';
import { composeValidators, required, maxLengthCreator } from '../../utils/validators/validators';
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    let onSubmit = (values) => {
        props.loginThunk(values.login, values.password, values.rememberMe, values.captcha);
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <Style.Form onSubmit={handleSubmit}>
                    <Style.FieldLogin>
                        <Field validate={composeValidators(required, maxLengthCreator(30))} name="login" placeholder='Login'  component={Input} />
                    </Style.FieldLogin>

                    <Style.FieldPassword>
                        <Field validate={composeValidators(required, maxLengthCreator(30))} name="password" placeholder='Password' component={Input} type='password' />
                    </Style.FieldPassword>

                    <Style.FieldRemember>
                        <Style.FieldRememberText>Запомнить</Style.FieldRememberText>
                        <Field name="rememberMe" component={CheckBox} type="checkbox" />
                    </Style.FieldRemember>
                    
                    {props.captchaUrl && 
                    <Style.FieldCaptcha>
                        <img src={props.captchaUrl}></img>
                        <Field name="captcha" component={Input} placeholder='Captcha' />
                    </Style.FieldCaptcha>}

                    <Style.Button> Логин </Style.Button>
                </Style.Form>
            )}
        />
    );
}

const Login = (props) => {
    if (props.isAuth === true) {
        return <Navigate to={`/profile/${props.userId}`}></Navigate>
    }
    else {
        return (
            <Style.Login>
                <Style.Content>
                    <Style.Title>Вы не авторизованы!</Style.Title>
                    <LoginForm {...props} ></LoginForm>
                </Style.Content>
            </Style.Login>
        );
    }
}

export default Login
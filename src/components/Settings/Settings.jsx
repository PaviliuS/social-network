import React from "react";
import * as Style from './Style';
import Input from "../common/FormControls/Input/Input";
import { Form, Field } from 'react-final-form';
import { required, maxLengthCreator, composeValidators } from '../../utils/validators/validators';
import CheckBox from "../common/FormControls/CheckBox/CheckBox";

const Settings = (props) => {
    let onSubmit = (values) => {
        let profile = {
            userId: props.userId,
            lookingForAJob: values.newLookingForAJob,
            lookingForAJobDescription: values.newLookingForAJobDescription,
            fullName: values.newName,
            aboutMe: values.newAboutMe,
            contacts: {
                github: values.newGitHub,
                vk: values.newVK,
                facebook: values.newFaceBook,
                instagram: values.newInstagram,
                twitter: values.newTwitter,
                website: values.newWebSite,
                youtube: values.newYouTube,
                mainLink: values.newMainLink,
            }
        }
        props.setProfile(profile);
    }

    return (
        <Style.Settings>
            <Style.Content height={props.height}>
                <Style.SettingsTitle>
                    Настройки
                </Style.SettingsTitle>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <Style.Form onSubmit={handleSubmit}>
                            <Style.FormItem>
                                <Style.FormItemText>Имя:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newName" placeholder='Имя...' initialValue={props.profile.fullName} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>Обо мне:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newAboutMe" placeholder='Обо мне...' initialValue={props.profile.aboutMe} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>О работе:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newLookingForAJobDescription" placeholder='О работе...' initialValue={props.profile.lookingForAJobDescription} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>GitHub:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newGitHub" placeholder='GitHub...' initialValue={props.profile.contacts.github} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>VK:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newVK" placeholder='VK...' initialValue={props.profile.contacts.vk} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>FaceBook:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newFaceBook" placeholder='FaceBook...' initialValue={props.profile.contacts.facebook} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>Instagram:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newInstagram" placeholder='Instagram...' initialValue={props.profile.contacts.instagram} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>Twitter:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newTwitter" placeholder='Twitter...' initialValue={props.profile.contacts.twitter} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>WebSite:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newWebSite" placeholder='WebSite...' initialValue={props.profile.contacts.website} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>YouTube:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newYouTube" placeholder='YouTube...' initialValue={props.profile.contacts.youtube} component={Input} />
                            </Style.FormItem>

                            <Style.FormItem>
                                <Style.FormItemText>MainLink:</Style.FormItemText>
                                <Field validate={composeValidators(required, maxLengthCreator(30))} name="newMainLink" placeholder='MainLink' initialValue={props.profile.contacts.mainLink} component={Input} />
                            </Style.FormItem>

                            <Style.FormItemJob>
                                <Style.FormItemTextJob>Ищу работу: </Style.FormItemTextJob>
                                <Field name="newLookingForAJob" placeholder='Сообщение' initialValue={props.profile.lookingForAJob} type='checkbox' component={CheckBox} />
                            </Style.FormItemJob>

                            <Style.Button>Готово</Style.Button>
                        </Style.Form>
                    )}
                />
            </Style.Content>
        </Style.Settings>
    );
}

export default Settings;

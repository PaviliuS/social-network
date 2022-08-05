import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { useState } from 'react';
import * as Style from './Style';
import Contact from './Contact/Contact';
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";

const Profile = (props) => {
    let [editMode, setEditMode] = useState(true);

    let onChangePhoto = (e) => {
        if (e.target.files.length) {
            props.setPhotoThunk(e.target.files[0]);
        }
    }

    if (props.profile === null) {
        return <Preloader></Preloader>
    }
    else {
        let contacts = false;
        for (let contact in props.profile.contacts) {
            if (props.profile.contacts[contact] !== null) {
                contacts = true;
            }
        }

        return (
            <Style.Profile height={props.height}>
                <Style.Content height={props.height}>
                    <Style.ProfileTitle>
                        Профиль
                    </Style.ProfileTitle>

                    <Style.ProfileList height={props.height}>
                        <Style.Image>
                            <img key={props.photoKey} src={props.profile.photos.large || 'https://cdn-icons-png.flaticon.com/512/56/56745.png'} alt='profilePhoto'></img>
                        </Style.Image>
                        {editMode && props.isOwner &&
                            <Style.SetPhoto>
                                <Style.InputText>Добавить фото</Style.InputText>
                                <Style.InputFile type='file' onChange={onChangePhoto}></Style.InputFile>
                            </Style.SetPhoto>
                        }

                        <Style.Data>
                            {props.profile.fullName ? <Style.DataLabel>Полное имя</Style.DataLabel> : ''}
                            {props.profile.fullName ? <Style.DataName>{props.profile.fullName}</Style.DataName> : ''}
                            {props.profile.aboutMe ? <Style.DataLabel>Описание</Style.DataLabel> : ''}
                            {props.profile.aboutMe ? <Style.DataName> {props.profile.aboutMe}</Style.DataName> : ''}
                            {props.status ? <Style.DataLabel>Статус</Style.DataLabel> : ''}
                            {props.status ? <ProfileStatus owner={props.isOwner} status={props.status} updateStatusThunk={props.updateStatusThunk} /> : ''}
                        </Style.Data>

                        {contacts ? <Style.Contacts>
                            <Style.ContactsTitle>Контакты</Style.ContactsTitle>
                            <Style.ContactsList>
                                {props.profile.contacts.github ? <Contact color={'#6e5494'} icon={<VscGithubInverted />} text={props.profile.contacts.github}></Contact> : ''}
                                {props.profile.contacts.vk ? <Contact color={'#45668e'} icon={'VK'} text={props.profile.contacts.vk}></Contact> : ''}
                                {props.profile.contacts.facebook ? <Contact color={'#1877f2'} icon={'FB'} text={props.profile.contacts.facebook}></Contact> : ''}
                                {props.profile.contacts.instagram ? <Contact color={'#c13584'} icon={'IG'} text={props.profile.contacts.instagram}></Contact> : ''}
                                {props.profile.contacts.twitter ? <Contact color={'#1da1f2'} icon={<VscTwitter />} text={props.profile.contacts.twitter}></Contact> : ''}
                                {props.profile.contacts.website ? <Contact color={'#168de2'} icon={'WEB'} text={props.profile.contacts.website}></Contact> : ''}
                                {props.profile.contacts.youtube ? <Contact color={'#ff0000'} icon={'YT'} text={props.profile.contacts.youtube}></Contact> : ''}
                                {props.profile.contacts.mainLink ? <Contact color={'#168de2'} icon={'ML'} text={props.profile.contacts.mainLink}></Contact> : ''}
                            </Style.ContactsList>
                        </Style.Contacts> : ''}

                    </Style.ProfileList>
                </Style.Content>
            </Style.Profile>

        );
    }
};

export default Profile;

{/* <Style.Top>
                    <Style.Title>
                    </Style.Title>
                    <Style.Settings>

                    </Style.Settings>
                </Style.Top>
                <Style.Block>
                    <Style.Block>
                        <Style.Image>
                            <Style.ImageBlock>

                            </Style.ImageBlock>

                        </Style.Image>
                        <Style.Contacts>
                            <Style.Git></Style.Git>
                            <style.Vk></style.Vk>
                            <Style.Facebook></Style.Facebook>
                            <Style.Instagram></Style.Instagram>
                            <Style.Twitter></Style.Twitter>
                            <Style.Website></Style.Website>
                            <Style.YouTube></Style.YouTube>
                            <Style.MainLink></Style.MainLink>
                        </Style.Contacts>
                    </Style.Block>




                </Style.Block> */}

            // <div className={stl.profile} >
            //     <div top>
            //         <div name></div>
            //         <div settings></div>

            //     </div>
            //     <div className={stl.profile__content}>

            //         <div className={stl.profile__profileDIV}>
            //             <div className={stl.profile__profile}>
            //                 <div className={stl.profile__image}>
            //                     <img key={props.photoKey} src={props.profile.photos.large || 'https://cdn-icons-png.flaticon.com/512/56/56745.png'} alt='profilePhoto'></img>
            //                 </div>
            //                 {editMode && props.isOwner &&
            //                     <div className={stl.profile__setPhoto} >
            //                         Добавить фото
            //                         <input type='file' onChange={onChangePhoto}></input>
            //                     </div>
            //                 }
            //                 <div className={stl.profile__name}>
            //                     {props.profile.fullName}
            //                 </div>
            //                 <div className={stl.profile__about}>
            //                     {props.profile.aboutMe}
            //                 </div>
            //                 <div className={stl.profile__online}>
            //                     {props.profile.aboutMe}
            //                 </div>

            //             </div>
            //         </div>

            //         <div className={stl.profile__dataDIV}>
            //             <div className={stl.profile__data}>
            //                 <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
            //             </div>

            //             <div className={stl.profile__posts}>
            //                 {postsElements}
            //             </div>
            //             <PostForm onPostChange={props.onPostChange} addPost={props.addPost}></PostForm>
            //         </div>
            //     </div>
            // </div>
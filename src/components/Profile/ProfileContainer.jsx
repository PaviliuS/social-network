import Profile from './Profile';
import { addPostActionCreator, getProfileThunkCrator, getStatusThunkCrator, updateStatusThunkCrator,setPhotoThunkCreator } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import React from 'react';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

const ProfileContainer = (props) => {
    let params = useParams();
    const [width, height] = useWindowSize();

    let isOwner = false; 
    if(String(params.userId) === String(props.userId)) isOwner = true;

    useEffect(() => {
        props.getProfileThunk(params.userId);
        props.getStatusThunk(params.userId);
    }, [params.userId]);


    return <Profile {...props} isOwner={isOwner} userId={params.userId} height={height}></Profile>
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        photoKey: state.profilePage.photoKey
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPostActionCreator(post))
        },
        getProfileThunk: (userId) => {
            dispatch(getProfileThunkCrator(userId));
        },
        getStatusThunk: (userId) => {
            dispatch(getStatusThunkCrator(userId));
        },
        updateStatusThunk: (status) => {
            dispatch(updateStatusThunkCrator(status));
        },
        setPhotoThunk: (photo) => {
            dispatch(setPhotoThunkCreator(photo));
        }
    }
};

export default
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect,
    )(ProfileContainer);
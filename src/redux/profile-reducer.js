import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_PHOTO = 'SET-PHOTO';

let initialState = {
    posts: [
        { id: '1', name: 'Михаил Максименко', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '2', name: 'Алёна Куликова', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '3', name: 'Александр Басов', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '4', name: 'Александр Морозов', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '5', name: 'Наталья Колотвинова', text: 'Привет, как дела?', like: '5', time: '9:30' },
        { id: '6', name: 'Иван Реусов', text: 'Привет, как дела?', like: '5', time: '9:30' }
    ],
    profile: null,
    photoKey: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: '6', name: 'Иван Реусов', text: action.text, like: '5', time: '9:30' };

            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case SET_PROFILE: {
            let stateCopy = { ...state };
            stateCopy.profile = action.profile;
     
            return stateCopy;
        }

        case SET_STATUS: {
            let stateCopy = { ...state };
            stateCopy.status = action.status;

            return stateCopy;
        }
        case SET_PHOTO: {
            let stateCopy = { ...state };
            stateCopy.profile.photos = action.photo;
            stateCopy.photos = action.photos;
            stateCopy.photoKey = Math.random(100);

            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreator = (text) => {
    return { type: ADD_POST, text: text };
};
export const setProfileActionCreator = (profile) => {
    return { type: SET_PROFILE, profile: profile };
};
export const setStatusActionCreator = (status) => {
    return { type: SET_STATUS, status: status };
};
export const setPhotoActionCreator = (photo) => {
    return { type: SET_PHOTO, photo: photo };
};

export const setPhotoThunkCreator = (photo) => {
    return async (dispatch) => {
        let response = await profileAPI.setPhoto(photo);

        if (response.resultCode === 0) {
            dispatch(setPhotoActionCreator(response.data.photos));
        }
    }
}
export const getProfileThunkCrator = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId);
        console.log(data);
        dispatch(setProfileActionCreator(data));

    }
}
export const getStatusThunkCrator = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId);
        dispatch(setStatusActionCreator(data));

    }
}
export const setProfileThunkCreator = (profile) => {
    return async (dispatch) => {
        let data = await profileAPI.setProfile(profile);
        console.log(data);  
        if (data.resultCode === 0) {
            dispatch(setProfileActionCreator(profile));
        }
    }
}
export const updateStatusThunkCrator = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.setStatus(status);
        
        if (data.resultCode === 0) {
            dispatch(setStatusActionCreator(status));
        }

    }
}

export default profileReducer;
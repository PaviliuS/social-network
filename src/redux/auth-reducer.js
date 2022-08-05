import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:{
            let stateCopy = { ...state };
            stateCopy = { ...action.data };

            return stateCopy;
        }
        case SET_CAPTCHA_URL:{
            let stateCopy = { ...state };
            stateCopy.captchaUrl = action.url;
    
            return stateCopy;
        }
        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => {
    return { type: SET_AUTH_USER_DATA, data: { userId, email, login, isAuth } }
}
export const setCaptchaUrlActionCreator = (url) => {
    return { type: SET_CAPTCHA_URL, url: url }
}

export const setCaptchaUrlThunkCreator = () => {
    return async (dispatch) => {
        let data = await authAPI.captcha();
        let url = data.url;
        dispatch(setCaptchaUrlActionCreator(url));        
    }
}

export const setAuthUserDataThunkCreator = () => {
    return async (dispatch) => {
        let data = await authAPI.auth();
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserDataActionCreator(id, email, login, true));
        }       
    }
}
export const LoginThunkCreator = (login, password, rememberMe, captcha) => {
    return async (dispatch) => {
        console.log(captcha);
        let data = await authAPI.login(login, password, rememberMe, captcha);
        console.log(captcha);
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataThunkCreator());
        }
        if (data.resultCode === 10) {
            dispatch(setCaptchaUrlThunkCreator());
        }
    }
}
export const LogoutThunkCreator = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataActionCreator(null, null, null, false));
        }
    }
}

export default authReducer;
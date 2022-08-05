import Login from "./Login";
import { connect } from 'react-redux';
import { LoginThunkCreator } from "../../redux/auth-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        captchaUrl: state.auth.captchaUrl,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginThunk: (login, password, rememberMe, captcha) => {
            dispatch(LoginThunkCreator(login, password, rememberMe, captcha));
        }
  
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
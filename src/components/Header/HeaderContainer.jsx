import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {getProfileThunkCrator} from '../../redux/profile-reducer';

const HeaderContainer = (props) => {


    useEffect(()=>{
        console.log(props.userId);
        props.getProfileThunk(props.userId);
    },[props.userId]);

    return (
  
       <Header logo={props.logo} userId={props.userId} email={props.email} login={props.login} switchTheme={props.switchTheme} switchMenu={props.switchMenu}></Header>
    );
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        profile: state.profilePage.profile,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {

      getProfileThunk:(userId) =>{
        dispatch(getProfileThunkCrator(userId))
      },
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
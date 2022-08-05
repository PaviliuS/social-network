import { connect } from 'react-redux';
import Navbar from './Navbar';
import { useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { menuOn,menuOff } from './Style'
import { LogoutThunkCreator } from '../../redux/auth-reducer';

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutThunk: () => {
            dispatch(LogoutThunkCreator());
        }
    }
};

const NavbarContainer =(props)=>{
    const [menu, setMenu] = useState("menuOn");
    const [width, height] = useWindowSize();
    
    const switchMenu = () => {
        menu === "menuOn" ? setMenu("menuOff") : setMenu("menuOn");
    };
    console.log(props);

    return(<Navbar {...props}  logoutThunk={props.logoutThunk} switchTheme={props.switchTheme} height={height} menu={menu === "menuOn" ? menuOn : menuOff} switchMenu={switchMenu}></Navbar>);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
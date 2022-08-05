import './App.scss';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setInitializedThunkCreator } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { ThemeProvider } from 'styled-components';
import * as StyledApp from './Style'
import { lightTheme, darkTheme } from './theme/theme';
import { useState } from 'react';
import { GlobalStyle } from './theme/theme';
import NavbarContainer from './components/Navbar/NavbarContainer';
import SettingsContainer from './components/Settings/SettingsContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const App = (props) => {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    props.setInitializedThunk();
  }, []);

  if (props.initialized === false) {
    return (
      <Preloader />
    );
  } else {
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle ></GlobalStyle>
        <StyledApp.App>
          <NavbarContainer switchTheme={switchTheme} />
          <StyledApp.Route>
            <Routes>
              <Route path='/profile/:userId/' element={<React.Suspense><ProfileContainer /></React.Suspense>}></Route>
              <Route path='/messages/*' element={<React.Suspense><DialogsContainer /></React.Suspense>}></Route>
              <Route path='/users/' element={<UsersContainer />}></Route>
              <Route path='/users/' element={<UsersContainer />}></Route>
              <Route path='/login/' element={<LoginContainer />}></Route>
              <Route path='/settings/' element={<SettingsContainer />}></Route>
            </Routes>
          </StyledApp.Route>
        </StyledApp.App>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitializedThunk: () => {
      dispatch(setInitializedThunkCreator())
    },
  }
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
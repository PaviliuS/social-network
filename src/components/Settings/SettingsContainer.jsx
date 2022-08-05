import Settings from './Settings';
import { setProfileThunkCreator, getProfileThunkCrator } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useEffect } from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const SettingsContainer = (props) => {
    const [width, height] = useWindowSize();

    useEffect(() => {
        props.getProfileThunk(props.userId);
    }, []);

    if (props.profile !== null) {
        return <Settings {...props} height={height}></Settings>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userId: state.auth.userId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {
            dispatch(setProfileThunkCreator(profile))
        },
        getProfileThunk: (userId) => {
            dispatch(getProfileThunkCrator(userId))
        },
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect,)(SettingsContainer);


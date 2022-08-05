import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setCurrentBlockActionCreator, setTotalUsersCountActionCreator, setIsFetchingActionCreator, setIsFollowingActionCreator, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getUsersSelector, getPageSizeSelector, getTotalUsersCountSelector, getCurrentPageSelector, getIsFetchingSelector, getIsFollowingSelector } from '../../redux/users-selectors';
import { useWindowSize } from '../../hooks/useWindowSize';

const UsersContainer = (props) => {
    const [width, height] = useWindowSize();

    useEffect(() => { props.getUsersThunk(props.currentPage, props.pageSize); }, [])

    let onPageChange = (currentPage, pageSize) => {
        props.setCurrentPage(currentPage);
        props.getUsersThunk(currentPage, pageSize);
    }
    let follow = (userId) => {
        props.followThunk(userId);
    }
    let unfollow = (userId) => {
        props.unfollowThunk(userId);
    }

    return (
        <Users
            height={height}
            users={props.users}
            pageSize={props.pageSize}
            totalUsersCount={props.totalUsersCount}
            currentPage={props.currentPage}
            onPageChange={onPageChange}
            follow={follow}
            unfollow={unfollow}
            isFetching={props.isFetching}
            setIsFetching={props.setIsFetching}
            isFollowing={props.isFollowing}
        >
        </Users>
    );

}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowing: getIsFollowingSelector(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount));
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching));
        },
        setIsFollowing: (isFollowing, userId) => {
            dispatch(setIsFollowingActionCreator(isFollowing, userId));
        },
        getUsersThunk: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize));
        },
        followThunk: (userId) => {
            dispatch(followThunkCreator(userId));
        },
        unfollowThunk: (userId) => {
            dispatch(unfollowThunkCreator(userId));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
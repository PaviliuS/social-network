import React from 'react';
import User from './User/User';
import Pagination from '../common/Pagination/Pagination';
import Preloader from '../common/Preloader/Preloader';
import * as Style from './Style'

const Users = (props) => {
    let getUsersElements = () => {
        if (props.isFetching === false) {
            return props.users.map(element => { return <User key={`user${element.id}`} user={element} follow={props.follow} unfollow={props.unfollow} isFollowing={props.isFollowing}></User>; })
        }
        else {
            return <Preloader></Preloader>
        }
    };

    return (
        <Style.Users>
            <Style.Content height={props.height}>
                <Style.List >
                    {getUsersElements()}
                </Style.List>
                <Style.Pagination>
                    <Pagination totalUsersCount={props.totalUsersCount} currentPage={props.currentPage} pageSize={props.pageSize} onPageChange={props.onPageChange}></Pagination>
                </Style.Pagination>
            </Style.Content>
        </Style.Users>
    );
}

export default Users;
import { NavLink } from 'react-router-dom';
import * as Style from './Style'
import { VscAdd, VscAccount, VscClose, VscNote } from "react-icons/vsc";

const User = (props) => {
    return (
        <Style.User>
            <NavLink to={'/profile/' + props.user.id}>
                <Style.Img>
                    <img src={props.user.photos.large || 'https://i.pinimg.com/564x/6e/f6/4b/6ef64b7417991febef4183091301b245.jpg'} alt='image1'></img>
                </Style.Img>
            </NavLink>

            <Style.Info>
                <Style.Name>
                    <Style.Icon>
                        <VscAccount />
                    </Style.Icon>
                    <Style.Text> {props.user.name}</Style.Text>
                </Style.Name>

                {props.user.status ?
                    <Style.Status>
                        <Style.Icon>
                            <VscNote />
                        </Style.Icon>
                        <Style.Text> {props.user.status}</Style.Text>
                    </Style.Status>
                    :
                    ''
                }
            </Style.Info>

            {props.user.followed ?
                <Style.UnfollowButton>
                    <button disabled={props.isFollowing.some(id => id === props.user.id)} onClick={() => { props.unfollow(props.user.id); }}><VscClose /></button>
                </Style.UnfollowButton>
                :
                <Style.FollowButton>
                    <button disabled={props.isFollowing.some(id => id === props.user.id)} onClick={() => { props.follow(props.user.id); }}><VscAdd /></button>
                </Style.FollowButton>
            }
        </Style.User>

    );
}

export default User;
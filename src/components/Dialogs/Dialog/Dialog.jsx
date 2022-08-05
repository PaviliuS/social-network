import { NavLink, useLocation } from 'react-router-dom';
import * as Style from './Style';

const Dialog = ({ id, name, message, url }) => {
    const location = useLocation();

    if (location.pathname === '/messages/' + id) {
        return (
            <NavLink to={'/messages/' + id}>
                <Style.ActiveContent>
                    <Style.Image>
                        <img src='https://i.pinimg.com/564x/6e/f6/4b/6ef64b7417991febef4183091301b245.jpg' alt={`image${id}`}></img>
                    </Style.Image>
                    <Style.Info>
                        <Style.Name>{name}</Style.Name>
                        <Style.Text>{message}</Style.Text>
                    </Style.Info>
                </Style.ActiveContent>
            </NavLink>
        );
    } else {
        return (
            <NavLink to={'/messages/' + id}>
                <Style.Content>
                    <Style.Image>
                        <img src='https://i.pinimg.com/564x/6e/f6/4b/6ef64b7417991febef4183091301b245.jpg' alt={`image${id}`}></img>
                    </Style.Image>
                    <Style.Info>
                        <Style.Name>{name}</Style.Name>
                        <Style.Text>{message}</Style.Text>
                    </Style.Info>
                </Style.Content>
            </NavLink>
        );
    }
}

export default Dialog;
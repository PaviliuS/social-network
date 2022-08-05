import * as Styled from './Style';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Link = (props) => {
    const location = useLocation();
    let address = location.pathname.split('/')[1];

    if (address === props.url) {
        return (

            <NavLink to={props.address}>
                <Styled.ActiveLink menu={props.menu}>
                    <Styled.Icon menu={props.menu}>{props.component}</Styled.Icon>
                    <Styled.Text menu={props.menu}>{props.text}</Styled.Text>
                </Styled.ActiveLink>
            </NavLink>

        );
    } else {
        return (

            <NavLink to={props.address}>
                <Styled.Link menu={props.menu}>
                    <Styled.Icon menu={props.menu}>{props.component}</Styled.Icon>
                    <Styled.Text menu={props.menu}> {props.text}</Styled.Text>
                </Styled.Link>
            </NavLink>

        );
    }
}




export default Link;
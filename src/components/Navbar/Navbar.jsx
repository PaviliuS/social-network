import { VscAccount, VscComment, VscOrganization, VscColorMode } from "react-icons/vsc";
import { GiExitDoor } from "react-icons/gi";
import * as Styled from './Style'
import Link from './Link/Link';
import Logo from "./Logo/Logo";
import Button from "./Button/Button";

const Navbar = (props) => {
    return (
        <Styled.Menu height={props.height} menu={props.menu}>
            <Logo login={props.login} userId={props.userId} menu={props.menu} switchMenu={props.switchMenu}></Logo>

            <Styled.Links>
                <Link menu={props.menu} url={'profile'} address={`/profile/${props.userId}`} component={<VscAccount />} text='Моя страница'></Link>
                <Link menu={props.menu} url={'messages'} address={'/messages'} component={<VscComment />} text='Сообщения'></Link>
                <Link menu={props.menu} url={'users'} address={'/users'} component={<VscOrganization />} text='Пользователи'></Link>
                <Link menu={props.menu} url={'settings'} address={`/settings/`} component={<VscAccount />} text='Настройки'></Link>
            </Styled.Links>
            <Styled.Buttons>
                <Button action={props.logoutThunk} menu={props.menu}  component={<GiExitDoor />} text='Выйти'></Button>
                <Button action={props.switchTheme} menu={props.menu}  component={<VscColorMode />} text='Сменить тему'></Button>        
            </Styled.Buttons>
        </Styled.Menu>

    );
}

export default Navbar;
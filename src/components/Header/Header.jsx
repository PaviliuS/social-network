import * as Style from './Style';
import { VscMenu } from "react-icons/vsc";

const Header = ({ logo, switchMenu }) => {
    return (
        <Style.Header>
            <Style.Content>
                <Style.Adv>
                    <Style.ButtonLightDarkMode onClick={switchMenu}><VscMenu/></Style.ButtonLightDarkMode>
                </Style.Adv>
                <Style.Logo>           
                </Style.Logo>
            </Style.Content>
        </Style.Header>


    );
}

export default Header; 
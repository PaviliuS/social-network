import * as Style from './Style'
import {VscArrowLeft,VscArrowRight} from "react-icons/vsc";

const Logo = (props) => {

    return (
        <Style.Logo menu={props.menu}>
            <Style.Image menu={props.menu} onClick={()=>{props.switchMenu()}}>
                <img src='https://i.pinimg.com/564x/6e/f6/4b/6ef64b7417991febef4183091301b245.jpg'></img>
            </Style.Image>
            <Style.Text menu={props.menu}>
                <Style.Name>{props.login}</Style.Name>
                <Style.Status>{props.userId}</Style.Status>
            </Style.Text>
           
        </Style.Logo>

    );
}

export default Logo;
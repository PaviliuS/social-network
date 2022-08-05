import * as Style from './Style'

const Message = ({ name, text, time, type }) => {
    return (
        <Style.Message>
            <Style.Image> 
                <img src='https://i.pinimg.com/564x/6e/f6/4b/6ef64b7417991febef4183091301b245.jpg'></img>
            </Style.Image>
            <Style.Data>
                <Style.Meta>
                    <Style.Name>{name}</Style.Name>
                    <Style.Time>{time}</Style.Time>
                </Style.Meta>
                <Style.Text>{text}</Style.Text>
            </Style.Data>
        </Style.Message>
    );
}

export default Message;
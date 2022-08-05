import React from "react";
import * as Style from './Style';

const Contact = (props) => {
    return (
        <Style.Link href={props.text}>
            <Style.Contact color={props.color}>
                <Style.Icon>{props.icon}</Style.Icon>
                {/* <Style.Text>{props.text}</Style.Text> */}
            </Style.Contact>
        </Style.Link>
    );
}

export default Contact;
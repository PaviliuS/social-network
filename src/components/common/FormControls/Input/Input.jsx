import React from "react";
import * as Style from './Style';

const Input = ({ input, meta, ...props }) => {
    console.log(props);
    if (meta.error && meta.touched) {
        return (
            <Style.Content>
                <Style.Input {...input} {...props} />
                <Style.Error>{meta.error}</Style.Error>
            </Style.Content>
        );
    }
    else {
        return (
            <Style.Content>
                <Style.Input {...input} {...props} />
            </Style.Content>
        );
    }
}

export default Input;
import React from "react";
import * as Style from './Style';

const Textarea = ({ input, meta, ...props }) => {
    if (meta.error && meta.touched) {
        return (
            <Style.Content>
                <Style.Textarea {...input} {...props} />
                <Style.Error>{meta.error}</Style.Error>
            </Style.Content>
        );
    }
    else {
        return (
            <Style.Content>
                <Style.Textarea {...input} {...props} />
            </Style.Content>
        );
    }
}

export default Textarea;
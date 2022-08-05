import React from "react"; 
import * as Style from './Style';

const CheckBox = ({ input, meta, ...props }) => {
    return (
        <Style.Content>     
            <Style.Input {...input} {...props} type='checkbox'/>        
        </Style.Content>
    );
}

export default CheckBox;

import React, { useEffect, useState } from 'react';
import * as Style from './Style';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let onClickSetEditMode = () => {
        if (editMode) {
            setEditMode(false);
            props.updateStatusThunk(status);
        } else {
            setEditMode(true);
        }
    }

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <Style.Status>
            <Style.Container>
                {editMode === false
                    ?
                    props.owner ?
                        <Style.Text onDoubleClick={() => onClickSetEditMode()} >
                            {status}
                        </Style.Text>
                        :
                        <Style.Text  >
                            {status}
                        </Style.Text>
                    :

                    <Style.Input onBlur={() => onClickSetEditMode()} >
                        <input onChange={onChangeStatus} autoFocus={true} value={status}></input>
                    </Style.Input>
                }
            </Style.Container>
        </Style.Status>
    );
}

export default React.memo(ProfileStatus);
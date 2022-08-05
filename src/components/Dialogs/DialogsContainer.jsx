import Dialogs from './Dialogs';
import {addMessageActionCreator} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import { useWindowSize } from '../../hooks/useWindowSize';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message));
        }
    }
};

const DialogsContainer = (props)=>{
    const [width, height] = useWindowSize();

    return(<Dialogs {...props} height={height} width={width}/>)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(DialogsContainer);
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: '1', name: 'User 1', message: 'Привет, как дела?' },
        { id: '2', name: 'User 2', message: 'Отличная погода' },
        { id: '3', name: 'User 3', message: 'Прекрасное настроение' },
        { id: '4', name: 'User 4', message: 'Великолепный город' },
        { id: '5', name: 'User 5', message: 'Красивый пейзаж' },
    ],
    messages: [
        { id: '1', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
        { id: '2', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
        { id: '3', name: 'Михаил Максименко', text: 'Привет, как дела?', time: '9:30' },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            let now= new Date();
            let [hours,minutes] = [now.getHours(),now.getMinutes()];
            minutes < 10 ? minutes = `0${minutes}` : minutes = `${minutes}`;
            
        
            let time = `${hours}:${minutes}`; 
            
            let newMessage = { id: '1', name: 'Михаил Максименко', text: action.message, time: time };

            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            return stateCopy;
        }
        default:{
            return state;      
        }
    }
}

export const addMessageActionCreator = (message) => {
    return {type: ADD_MESSAGE, message: message};
};

export default dialogsReducer;
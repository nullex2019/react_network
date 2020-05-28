const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'What you name?'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Hi'},
    ],
    dialogsData: [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText:action.newText
            }
        case SEND_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText:'',
                messagesData: [...state.messagesData,{id: 6, message: body}]  //stateCopy.messagesData.push({id: 6, message: body})
            }
        }
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newText: text})


export default dialogsReducer;
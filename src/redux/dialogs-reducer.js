const SUBMIT_MESSAGE = 'SUBMIT-MESSAGE';
const ONCHANGE_INPUT_MESSAGE = 'ONCHANGE-INPUT-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Sergey'}
    ],
    messages: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'hi!', class: 'me'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'fine and you?', class: 'me'},
    ],
    newTextMessage: ''
}
const dialogsReducer = (state = initialState, action) => {
    let id = 4
    switch (action.type) {
        case SUBMIT_MESSAGE:

            const newMessage = {
                id: id++,
                message: state.newTextMessage,
                class: 'me'
            }

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newTextMessage: ''
            };
        case ONCHANGE_INPUT_MESSAGE: {
            return {
                ...state,
                newTextMessage: action.text
            };
        }
        default:
            return state;
    }
}

export const onchangeInputMessageActionCreation = (valueTextArea) => ({
    type: ONCHANGE_INPUT_MESSAGE,
    text: valueTextArea
});
export const submitMessageActionCreation = () => ({type: SUBMIT_MESSAGE});

export default dialogsReducer;
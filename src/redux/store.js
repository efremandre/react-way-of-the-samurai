import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    name: 'Kate',
                    like: 10,
                    dislike: 0,
                    text: 'Hi',
                    image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'
                },
                {
                    id: 2,
                    name: 'Tom',
                    like: 11,
                    dislike: 5,
                    text: 'Hello',
                    image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'
                },
                {
                    id: 3,
                    name: 'Dave',
                    like: 5,
                    dislike: 2,
                    text: '....',
                    image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'
                }
            ],
            newTextPost: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('Changed state');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }
}

export default store;
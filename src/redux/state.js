let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, name: 'Kate', like: 10, dislike: 0, text: 'Hi', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'},
                {id: 2, name: 'Tom', like: 11, dislike: 5, text: 'Hello', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'},
                {id: 3, name: 'Dave', like: 5, dislike: 2, text: '....', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'}
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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('Changed state');
    },
    changeInputPost(text) {},
    changeInputMessage(text) {},
    addPost() {},
    submitMessage(){},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-NEW-POST') {
            let id = 4
            const newPost = {
                id: id++,
                name: 'Me',
                like: 0,
                dislike: 0,
                text: this._state.profilePage.newTextPost,
                image: 'https://krd.mir-kvestov.ru/uploads/quests/7110/large/notreal_kosmos_photo1.jpg?1692275778'
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextPost = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ONCHANGE-INPUT-POST') {
            this._state.profilePage.newTextPost = action.text;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'SUBMIT-MESSAGE') {
            let id = 4
            const newMessage = {
                id: id++,
                message: store._state.dialogsPage.newTextMessage,
                class: 'me'
            }

            store._state.dialogsPage.messages.push(newMessage);
            store._state.dialogsPage.newTextMessage = '';
            store._callSubscriber(store._state);
        }
        else if (action.type === 'ONCHANGE-INPUT-MESSAGE') {
            this._state.dialogsPage.newTextMessage = action.text;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;
export default store;
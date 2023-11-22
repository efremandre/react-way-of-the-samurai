const store = {
    state: {
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
            newTextMessage: 'ыыы'
        }
    },
    rerenderEntireTree() {
        console.log('Changed state');
    },
    changeInputPost(text) {
        store.state.profilePage.newTextPost = text;
        store.rerenderEntireTree(store);
    },
    changeInputMessage(text) {
        store.state.dialogsPage.newTextMessage = text;
        store.rerenderEntireTree(store.state);
    },
    addPost() {
        let id = 4

        const newPost = {
            id: id++,
            name: 'Me',
            like: 0,
            dislike: 0,
            text: store.state.profilePage.newTextPost,
            image: 'https://krd.mir-kvestov.ru/uploads/quests/7110/large/notreal_kosmos_photo1.jpg?1692275778'
        };

        store.state.profilePage.posts.push(newPost);
        store.state.profilePage.newTextPost = '';
        store.rerenderEntireTree(store);
    },
    submitMessage(){
        let id = 4
        const newMessage = {
            id: id++,
            message: store.state.dialogsPage.newTextMessage,
            class: 'me'
        }

        store.state.dialogsPage.messages.push(newMessage);
        store.state.dialogsPage.newTextMessage = '';
        store.rerenderEntireTree(store);
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}

export default store
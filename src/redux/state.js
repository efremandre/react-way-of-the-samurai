import {rerenderEntireTree} from "./render";

const state = {
    profilePage: {
        posts: [
            {id: 1, name: 'Kate', like: 10, dislike: 0, text: 'Hi', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'},
            {id: 2, name: 'Tom', like: 11, dislike: 5, text: 'Hello', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'},
            {id: 3, name: 'Dave', like: 5, dislike: 2, text: '....', image: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg'}
        ],
        newTextPost: 'samurai'
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
}
window.state = state;
export const changeInputPost = (text) => {
    state.profilePage.newTextPost = text;
    rerenderEntireTree(state);
}

export const changeInputMessage = (text) => {
  state.dialogsPage.newTextMessage = text;
  rerenderEntireTree(state);
}

export const addPost = () => {
    let id = 4

    const newPost = {
        id: id++,
        name: 'Me',
        like: 0,
        dislike: 0,
        text: state.profilePage.newTextPost,
        image: 'https://krd.mir-kvestov.ru/uploads/quests/7110/large/notreal_kosmos_photo1.jpg?1692275778'
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newTextPost = '';
    rerenderEntireTree(state);
}

export const submitMessage = () => {
    let id = 4
    const newMessage = {
        id: id++,
        message: state.dialogsPage.newTextMessage,
        class: 'me'
    }

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newTextMessage = '';
    rerenderEntireTree(state);
}

export default state
const ADD_NEW_POST = 'ADD-NEW-POST';
const ONCHANGE_INPUT_POST = 'ONCHANGE-INPUT-POST';

let initialState = {
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
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let id = 4
            const newPost = {
                id: id++,
                name: 'Me',
                like: 0,
                dislike: 0,
                text: state.newTextPost,
                image: 'https://krd.mir-kvestov.ru/uploads/quests/7110/large/notreal_kosmos_photo1.jpg?1692275778'
            };

            let newState = {...state};
            newState.posts = [...state.posts];
            newState.posts.push(newPost);
            newState.newTextPost = '';
            return newState;
        }
        case ONCHANGE_INPUT_POST: {
            let newState = {...state};
            newState.newTextPost = action.valueTextAreaPost;
            return newState;
        }
        default: return state;
    }
}

export const onchangeInputPostActionCreation = (valueTextAreaPost) => ({
    type: ONCHANGE_INPUT_POST,
    valueTextAreaPost: valueTextAreaPost
});
export const addPostActionCreation = () => ({type: ADD_NEW_POST});

export default profileReducer;
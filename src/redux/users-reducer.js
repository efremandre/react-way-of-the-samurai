const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_AVATAR = 'SET-AVATAR';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     avatarUrl: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg',
        //     name: 'Kate',
        //     surname: 'K',
        //     status: 'I`m a Boss!',
        //     placeFrom: {
        //         city: 'Moscow',
        //         country: 'Russia',
        //     },
        //     following: false,
        // },
        // {
        //     id: 2,
        //     avatarUrl: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg',
        //     name: 'Andrew',
        //     surname: 'E',
        //     status: 'I`m a Boss too!',
        //     placeFrom: {
        //         city: 'Krasnodar',
        //         country: 'Russia',
        //     },
        //     following: true,
        // },
        // {
        //     id: 3,
        //     avatarUrl: 'https://hi-news.ru/wp-content/uploads/2014/12/kosmonavt_luna_otdyh_1920x1200-650x406-1.jpg',
        //     name: 'Sascha',
        //     surname: 'K',
        //     status: 'I`m a Boss too!',
        //     placeFrom: {
        //         city: 'Minsk',
        //         country: 'Belarus',
        //     },
        //     following: false,
        // }
    ]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, following: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, following: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default: return state;
    }
}

export const followingtActionCreation = (userId) => ({
    type: FOLLOW,
    userId: userId,
});

export const unfollowingtActionCreation = (userId) => ({
    type: UNFOLLOW,
    userId: userId,
});

export const setUsersActionCreation = (users) => ({
    type: SET_USERS,
    users: users,
});

export default usersReducer;
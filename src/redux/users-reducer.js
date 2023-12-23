const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE_NUMBER = 'SET-PAGE-NUMBER';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
    users: [],
    pageNumber: 1,
    userCount: 10,
    totalCount: 0
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
                users: [...action.users]
            }
        }
        case SET_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.pageNumber,
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount,
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

export const setPageNumberActionCreation = (pageNumber) => ({
    type: SET_PAGE_NUMBER,
    pageNumber: pageNumber,
});

export const setTotalCountActionCreation = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount: totalCount,
});

export default usersReducer;
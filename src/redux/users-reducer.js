const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE_NUMBER = 'SET-PAGE-NUMBER';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_PAGINATION_NUMBER = 'TOGGLE-IS-PAGINATION-NUMBER';
const SET_FLAG_PAGINATION_NUMBER = 'SET-FLAG-PAGINATION-NUMBER';

let initialState = {
    users: [],
    pageNumber: 1,
    userCount: 10,
    totalCount: 0,
    isFetching: false,
    pagination: {
        flagPositionPagiantion: 0,
        totalAmount: 0,
        displayedSpan: 10,
        startPeriod: 0,
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
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
                        return {...user, followed: false}
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        case TOGGLE_IS_PAGINATION_NUMBER: {
            return {
                ...state,
                pagination: { ...state.pagination, displayedSpan: action.displayedSpan, startPeriod: action.startPeriod},
            }
        }

        case SET_FLAG_PAGINATION_NUMBER: {
            return {
                ...state,
                pagination: { ...state.pagination, flagPositionPagiantion: action.flagPositionPagiantion},
            }
        }

        default: return state;
    }
}

// action creaters

export const setFollow = (userId) => ({
    type: FOLLOW,
    userId: userId,
});

export const setUnFollow = (userId) => ({
    type: UNFOLLOW,
    userId: userId,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users,
});

export const setPageNumber = (pageNumber) => ({
    type: SET_PAGE_NUMBER,
    pageNumber: pageNumber,
});

export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount: totalCount,
});

export const toggleFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
});

export const togglePaginationNumber = (startPeriod, displayedSpan) => ({
    type: TOGGLE_IS_PAGINATION_NUMBER,
    displayedSpan,
    startPeriod,
});

export const setFlag = (flagPositionPagiantion) => ({
    type: SET_FLAG_PAGINATION_NUMBER,
    flagPositionPagiantion,
});

export default usersReducer;
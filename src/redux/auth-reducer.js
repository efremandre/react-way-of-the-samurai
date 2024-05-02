const SET_AUTH = 'SET-AUTH';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }

        default: return state;
    }
}

export const setAuthMeAC = ({email, id, login}) => ({
    type: SET_AUTH,
    data: {
        email,
        id,
        login,
    },
});

export default authReducer;
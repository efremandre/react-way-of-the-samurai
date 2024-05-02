import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPages: usersReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;
export default store;
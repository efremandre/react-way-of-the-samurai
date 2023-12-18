import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPages: usersReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
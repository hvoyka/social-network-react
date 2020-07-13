import {createStore, combineReducers} from "redux";


import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profileReducer, 
  dialogsPage: dialogReducer, 
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth : authReducer
});


let store = createStore(reducers);

export default store;
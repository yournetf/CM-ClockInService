import { combineReducers } from '@reduxjs/toolkit'; 
import AuthReducer from "./auth_reducer";
import PostsReducer from "./posts_reducer";

const rootReducer = combineReducers({
    authReducer: AuthReducer,
    posts_reducer: PostsReducer
})

export default rootReducer;
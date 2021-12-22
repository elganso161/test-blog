import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsReducers";
import userReducer from "./userReducer";

export default configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});

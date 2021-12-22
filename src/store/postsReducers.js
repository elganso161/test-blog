import { createSlice } from "@reduxjs/toolkit";
import initialState from "../data.json";

export const postsReducer = createSlice({
  name: "posts",
  initialState: {
    itemPost: initialState,
  },
  reducers: {
    increment: (state, action) => {
      state.itemPost[action.payload - 1].likeCount++;
    },
    addComments: (state, action) => {
      console.log(action);
      //   let articul = action.payload;
      state.itemPost[action.payload.a - 1].comments.push(action.payload.b);
    },
  },
});

export const { increment, addComments } = postsReducer.actions;

export const selectBlogState = (state) => state.posts.itemPost;

export default postsReducer.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../../types/dataTypes";

export interface PostsState {
  value: Post[];
}

const initialState: PostsState = {
  value: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    initializePosts: (state, action: PayloadAction<Post[]>) => {
      state.value = action.payload.slice();
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.value.push(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      console.log("updatePost");

      const index = state.value.findIndex(
        (post) => post._id === action.payload._id
      );
      state.value[index] = action.payload;
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((post) => post._id !== action.payload);
    },
  },
});

export const { initializePosts, addPost, updatePost, deletePost } =
  postsSlice.actions;

export default postsSlice.reducer;

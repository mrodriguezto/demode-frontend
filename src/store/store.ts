import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./slices/events";
import postsSlice from "./slices/posts";
import productsSlice from "./slices/products";

export const store = configureStore({
  reducer: {
    events: eventsSlice,
    posts: postsSlice,
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

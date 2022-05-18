import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./slices/events";
import postsSlice from "./slices/posts";
import productsSlice from "./slices/products";
import { demodeApi } from "../api/demodeApi";

export const store = configureStore({
  reducer: {
    events: eventsSlice,
    posts: postsSlice,
    products: productsSlice,

    [demodeApi.reducerPath]: demodeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(demodeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

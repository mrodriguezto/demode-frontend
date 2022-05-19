import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/posts";
import productsSlice from "./slices/products";
import { demodeApi } from "../api/demodeApi";
import { eventsApi } from "./services/events";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    products: productsSlice,

    [demodeApi.reducerPath]: demodeApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(demodeApi.middleware, eventsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products";
import { demodeApi } from "../api/demodeApi";
import { eventsApi } from "./services/events";
import { postsApi } from "./services/posts";

export const store = configureStore({
  reducer: {
    products: productsSlice,

    [demodeApi.reducerPath]: demodeApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      demodeApi.middleware,
      eventsApi.middleware,
      postsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

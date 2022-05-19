import { configureStore } from "@reduxjs/toolkit";
import { eventsApi, postsApi, productsApi } from "./services";

export const store = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      eventsApi.middleware,
      postsApi.middleware,
      productsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

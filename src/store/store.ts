import { configureStore } from "@reduxjs/toolkit";
import { demodeApi } from "../api/demodeApi";
import { eventsApi, postsApi, productsApi } from "./services";

export const store = configureStore({
  reducer: {
    [demodeApi.reducerPath]: demodeApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      demodeApi.middleware,
      eventsApi.middleware,
      postsApi.middleware,
      productsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

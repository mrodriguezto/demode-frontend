import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "../feature/eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventsSlice,
  }, // TODO: Add posts, products, events reducers
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

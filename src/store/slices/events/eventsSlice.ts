import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event } from "../../../types/dataTypes";

export interface EventsState {
  value: Event[];
}

const initialState: EventsState = {
  value: [],
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    initializeEvents: (state, action: PayloadAction<Event[]>) => {
      state.value = action.payload.slice();
    },
    addEvent: (state, action: PayloadAction<Event>) => {
      state.value.push(action.payload);
    },
    updateEvent: (state, action: PayloadAction<Event>) => {
      const index = state.value.findIndex(
        (event) => event._id === action.payload._id
      );
      state.value[index] = action.payload;
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((event) => event._id !== action.payload);
    },
  },
});

export const { initializeEvents, addEvent, updateEvent, deleteEvent } =
  eventsSlice.actions;

export default eventsSlice.reducer;

import { createApi } from "@reduxjs/toolkit/query/react";
import { Event, EventData } from "../../types/dataTypes";
import { baseQuery, providesList } from "./config";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  tagTypes: ["Events"],
  baseQuery: baseQuery("/events"),
  endpoints: (builder) => ({
    getEvents: builder.query<Event[], void>({
      query: () => "/",
      providesTags: (result) => providesList(result, "Events"),
    }),
    addEvent: builder.mutation<Event, EventData>({
      query: (body) => ({
        url: "/new",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Events", id: "LIST" }],
    }),
    updateEvent: builder.mutation<Event, { id: string; body: EventData }>({
      query: ({ id, body }) => ({
        url: `/${id}/edit`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Events", id }],
    }),
    deleteEvent: builder.mutation<Event, string>({
      query: (id) => ({
        url: `/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Events", id }],
    }),
  }),
});
export const {
  useGetEventsQuery,
  useAddEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Event, Post, PreviewData, Product } from "../types/dataTypes";

export const demodeApi = createApi({
  reducerPath: "demodeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getPreviewData: builder.query<PreviewData, void>({
      query: () => "/preview",
    }),
    getEvents: builder.query<Event[], void>({
      query: () => "/events",
    }),
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
});

export const {
  useGetPreviewDataQuery,
  useGetEventsQuery,
  useGetProductsQuery,
  useGetPostsQuery,
} = demodeApi;

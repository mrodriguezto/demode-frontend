import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, PreviewData, Product } from "../types/dataTypes";

export const demodeApi = createApi({
  reducerPath: "demodeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    // get data queries
    getPreviewData: builder.query<PreviewData, void>({
      query: () => "/preview",
    }),
  }),
});

export const { useGetPreviewDataQuery } = demodeApi;

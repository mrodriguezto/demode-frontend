import { createApi } from "@reduxjs/toolkit/query/react";
import { Post, PostData } from "../../types/dataTypes";
import { baseQuery, providesList } from "./config";

export const postsApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["Posts"],
  baseQuery: baseQuery("/posts"),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/",
      providesTags: (result) => providesList(result, "Posts"),
    }),
    addPost: builder.mutation<Post, PostData>({
      query: (body) => ({
        url: "/new",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    updatePost: builder.mutation<
      Post,
      { id: string; body: Omit<PostData, "img"> }
    >({
      query: ({ id, body }) => ({
        url: `/${id}/edit`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
    }),
    deletePost: builder.mutation<Post, string>({
      query: (id) => ({
        url: `/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
  }),
});
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductData } from "../../types/dataTypes";
import { baseQuery, providesList } from "./config";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Products"],
  baseQuery: baseQuery("/products"),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/",
      providesTags: (result) => providesList(result, "Products"),
    }),
    addProduct: builder.mutation<Product, ProductData>({
      query: (body) => ({
        url: "/new",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
    updateProduct: builder.mutation<
      Product,
      { id: string; body: Omit<ProductData, "img"> }
    >({
      query: ({ id, body }) => ({
        url: `/${id}/edit`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Products", id }],
    }),
    deleteProduct: builder.mutation<Product, string>({
      query: (id) => ({
        url: `/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Products", id }],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;

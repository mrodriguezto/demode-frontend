import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const baseQuery = (path: string) =>
  fetchBaseQuery({
    baseUrl: String(
      import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
    ).concat(path),
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("admin-token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

export const providesList = <
  R extends { _id: string | number }[],
  T extends string
>(
  resultsWithIds: R | undefined,
  tagType: T
) => {
  return resultsWithIds
    ? [
        { type: tagType, id: "LIST" },
        ...resultsWithIds.map(({ _id }) => ({ type: tagType, id: _id })),
      ]
    : [{ type: tagType, id: "LIST" }];
};

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    postUser: builder.mutation({
      query: ({ name, post }) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useGetUsersQuery, usePostUserMutation } = usersApi;

// getUser: builder.query({
//   query: (id) => `users/${id}`,
// }),
// useGetUserQuery,

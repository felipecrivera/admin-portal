import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/user`,
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (id) => ({
        url: `/getAllUser/${id}`,
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: `/create`,
        method: "POST",
        body: user,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Users", "Customer"],
    }),
    editUser: builder.mutation({
      query: (user) => ({
        url: `/edit/${user._id}`,
        method: "POST",
        body: user,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Users", "Customer"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useCreateUserMutation,
  useEditUserMutation,
} = userApi;

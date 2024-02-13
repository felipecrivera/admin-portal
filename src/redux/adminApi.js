import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  tagTypes: ["Admin"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/admin`,
  }),
  endpoints: (builder) => ({
    getAdmins: builder.query({
      query: () => ({
        url: "/get",
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      providesTags: ["Admin"],
    }),
    createAdmin: builder.mutation({
      query: (admin) => ({
        url: `/signup`,
        method: "POST",
        body: admin,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    editAdmin: builder.mutation({
      query: (admin) => ({
        url: `/edit/${admin._id}`,
        method: "POST",
        body: admin,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    loginAdmin: builder.mutation({
      query: (admin) => ({
        url: `/signin`,
        method: "POST",
        body: admin,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getAdminDashboard: builder.query({
      query: (id) => ({
        url: `/getDashboard/${id}`,
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      providesTags: ["Admin"],
    }),
  }),
});

export const {
  useGetAdminsQuery,
  useCreateAdminMutation,
  useLoginAdminMutation,
  useGetAdminDashboardQuery,
  useEditAdminMutation,
} = adminApi;

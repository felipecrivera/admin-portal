import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recordApi = createApi({
  reducerPath: "recordApi",
  tagTypes: ["Record"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/record`,
  }),
  endpoints: (builder) => ({
    getRecord: builder.query({
      query: () => ({
        url: "/get",
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      providesTags: ["Record"],
    }),
    updateRecord: builder.mutation({
      query: ({ id, record }) => ({
        url: `/edit/${id}`,
        method: "PATCH",
        body: record,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Record"],
    }),
    createRecord: builder.mutation({
      query: (records) => ({
        url: `/create`,
        method: "POST",
        body: records,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Record"],
    }),
  }),
});

export const {
  useGetRecordQuery,
  useUpdateRecordMutation,
  useCreateRecordMutation,
} = recordApi;

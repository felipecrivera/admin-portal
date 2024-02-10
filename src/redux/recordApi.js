import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recordApi = createApi({
  reducerPath: "recordApi",
  tagTypes: ["Record"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/record`,
  }),
  endpoints: (builder) => ({
    getRecord: builder.query({
      query: () => "/get",
      providesTags: ["Record"],
    }),
    updateRecord: builder.mutation({
      query: ({ id, record }) => ({
        url: `/edit/${id}`,
        method: "PATCH",
        body: record,
        headers: {
          "Content-Type": "application/json",
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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reportApi = createApi({
  reducerPath: "reportApi",
  tagTypes: ["Report"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/report`,
  }),
  endpoints: (builder) => ({
    searchRecords: builder.query({
      query: (searchQuery) => ({
        url: `/search?${searchQuery}`,
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      providesTags: ["Report"],
    }),
  }),
});

export const { useSearchRecordsQuery } = reportApi;

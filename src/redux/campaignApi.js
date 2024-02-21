import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const campaignApi = createApi({
  reducerPath: "campaignApi",
  tagTypes: ["Campaign"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/campaign`,
  }),
  endpoints: (builder) => ({
    getAllCampaign: builder.query({
      query: (id) => ({
        url: `/getAllCampaign/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      providesTags: ["Campaign"],
    }),
    createCampaign: builder.mutation({
      query: (campaign) => ({
        url: `/create`,
        method: "POST",
        body: campaign,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Campaign", "Customer"],
    }),
    editCampaign: builder.mutation({
      query: (campaign) => ({
        url: `/edit/${campaign._id}`,
        method: "POST",
        body: campaign,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Campaign", "Customer"],
    }),
  }),
});

export const {
  useGetAllCampaignQuery,
  useCreateCampaignMutation,
  useEditCampaignMutation,
} = campaignApi;

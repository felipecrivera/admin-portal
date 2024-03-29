import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerApi = createApi({
  reducerPath: "customerApi",
  tagTypes: ["Customer"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/customer`,
  }),
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => ({
        url: "/get",
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      providesTags: ["Customer"],
    }),
    createCustomer: builder.mutation({
      query: (customer) => ({
        url: `/signup`,
        method: "POST",
        body: customer,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Customer"],
    }),
    editCustomer: builder.mutation({
      query: (customer) => ({
        url: `/edit/${customer._id}`,
        method: "POST",
        body: customer,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Customer"],
    }),
    loginCustomer: builder.mutation({
      query: (customer) => ({
        url: `/signin`,
        method: "POST",
        body: customer,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Customer"],
    }),
    getCustomerDashboard: builder.query({
      query: (id) => ({
        url: `/getDashboard/${id}`,
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      providesTags: ["Customer"],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useCreateCustomerMutation,
  useLoginCustomerMutation,
  useGetCustomerDashboardQuery,
  useEditCustomerMutation,
} = customerApi;

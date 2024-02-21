import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const conversationApi = createApi({
  reducerPath: "conversationApi",
  tagTypes: ["Conversation"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/conversation`,
  }),
  endpoints: (builder) => ({
    createConversation: builder.mutation({
      query: (conversations) => ({
        url: `/create`,
        method: "POST",
        body: conversations,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Conversation"],
    }),
  }),
});

export const { useCreateConversationMutation } = conversationApi;

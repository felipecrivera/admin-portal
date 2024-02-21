import { configureStore } from "@reduxjs/toolkit";
import { recordApi } from "./recordApi";
import { reportApi } from "./reportApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { customerApi } from "./customerApi";
import { adminApi } from "./adminApi";
import { userApi } from "./userApi";
import { campaignApi } from "./campaignApi";
import { conversationApi } from "./conversationApi";

export const store = configureStore({
  reducer: {
    [recordApi.reducerPath]: recordApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [campaignApi.reducerPath]: campaignApi.reducer,
    [conversationApi.reducerPath]: conversationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      recordApi.middleware,
      reportApi.middleware,
      customerApi.middleware,
      adminApi.middleware,
      userApi.middleware,
      conversationApi.middleware,
      campaignApi.middleware
    ),
});

setupListeners(store.dispatch);

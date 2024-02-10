import { configureStore } from "@reduxjs/toolkit";
import { recordApi } from "./recordApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [recordApi.reducerPath]: recordApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recordApi.middleware),
});

setupListeners(store.dispatch);

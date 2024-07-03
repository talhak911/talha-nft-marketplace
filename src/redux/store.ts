import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./slices/CollectionsSlice";
import nftsByCollectionReducer from "./slices/nftsByCollectionSlice";
import nftReducer from "./slices/nftSlice";

export const store = configureStore({
  reducer: {
    collections:collectionsReducer,
    nftsByCollection:nftsByCollectionReducer,
    nft:nftReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

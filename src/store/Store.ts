import { configureStore } from '@reduxjs/toolkit'
import collectionsReducer from "../store/slices/NftCollectionsSlice"
import  NftsByCollectionReducer from "../store/slices/NftsByCollection"

export  const store= configureStore({
  reducer: {
    collectionsReducer,
    NftsByCollectionReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
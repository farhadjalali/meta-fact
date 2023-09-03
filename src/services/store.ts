import { configureStore } from '@reduxjs/toolkit'
import { relationReducer } from './relation/reducer'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    relation: relationReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useStore = () => useSelector<RootState, RootState>((state: RootState) => state)

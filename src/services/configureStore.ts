import { AnyAction, combineReducers, configureStore as reduxConfigureStore, Store } from '@reduxjs/toolkit'
import { relationReducer } from './relations/reducer'

const rootReducer = combineReducers({
  relation: relationReducer,
})

export function configureStore(): Store<unknown, AnyAction> {
  return reduxConfigureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: process.env.NODE_ENV !== 'development',
      }),
  })
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Relation, RelationState } from './types'

const slice = createSlice({
  name: 'relation',
  initialState: {
    relations: [],
    loadingState: 'idle',
    loadingProgress: 0,
  } as RelationState,

  reducers: {
    relationUpserted: (state, action: PayloadAction<Relation>) => {
      const index = state.relations.findIndex((item) => item.id === action.payload.id)
      if (index !== -1) {
        state.relations[index] = action.payload
      } else {
        state.relations.push(action.payload)
      }
    },

    loadingStateUpdated: (state, action: PayloadAction<RelationState['loadingState']>) => {
      state.loadingState = action.payload
    },

    loadingProgressUpdated: (state, action: PayloadAction<number>) => {
      state.loadingProgress = action.payload
    },
  },
})

export const { relationUpserted, loadingStateUpdated, loadingProgressUpdated } = slice.actions

export const relationReducer = slice.reducer

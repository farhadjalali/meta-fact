import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Relation } from './types'

interface RelationState {
  relations: Relation[]
  loadingState: 'idle' | 'loading' | 'failed' | 'completed'
  loadingProgress: number
}

const initialState: RelationState = {
  relations: [],
  loadingState: 'idle',
  loadingProgress: 0,
}

const relationSlice = createSlice({
  name: 'relation',
  initialState,
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

export const { relationUpserted, loadingStateUpdated, loadingProgressUpdated } = relationSlice.actions

export const relationReducer = relationSlice.reducer

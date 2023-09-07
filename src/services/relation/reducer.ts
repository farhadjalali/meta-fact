import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Relation } from './types'

export interface RelationState {
  relations: Relation[]
  loadingProgress: number | null // null means idle, 0-100 means loading
}

const initialState: RelationState = {
  relations: [],
  loadingProgress: null,
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

    loadingProgressUpdated: (state, action: PayloadAction<number>) => {
      state.loadingProgress = action.payload
    },
  },
})

export const { relationUpserted, loadingProgressUpdated } = relationSlice.actions

export const relationReducer = relationSlice.reducer

import { Dispatch } from '@reduxjs/toolkit'

import { loadingProgressUpdated, relationUpserted } from './reducer'
import { GetStateFunction } from '../store'
import { loadRelationObserver$ } from './api'
import { Relation } from './types'

export const retrieveRelations = () => (dispatch: Dispatch, getState: GetStateFunction) => {
  const { relation } = getState()
  if (relation.loadingProgress !== null) return // Only load if we are in idle state

  // Then start loading the relations
  loadRelationObserver$().subscribe(({ item, index, total }) => {
    // Update / insert the relation in the store
    dispatch(relationUpserted(item))
    const progress = Math.round(((index + 1) / total) * 100)
    dispatch(loadingProgressUpdated(progress))
  })
}

export const updateRelation = (relation: Relation) => (dispatch: Dispatch) => {
  /*
   Add logic here to update the relation in the backend!
  */
  dispatch(relationUpserted(relation))
}

import { Dispatch } from '@reduxjs/toolkit'
import { Observable } from 'rxjs'
import { loadingProgressUpdated, relationUpserted } from './reducer'
import { PartialLoadItem, Relation } from './types'
import { GetStateFunction } from '../store'

// Mock data
import sample from './sample.json'

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

export const loadRelationObserver$ = () =>
  // Mocking the loading of the relations
  new Observable<PartialLoadItem<Relation>>((subscriber) => {
    let index = 0
    const itemLoadSimulatedDelay = 500 // ms
    const interval = setInterval(() => {
      if (index === sample.length) {
        clearInterval(interval)
        return subscriber.complete()
      }

      subscriber.next({ item: sample[index] as Relation, index, total: sample.length })
      index++
    }, itemLoadSimulatedDelay)
  })

export const updateRelation = (relation: Relation) => (dispatch: Dispatch) => {
  /*
   Add logic to update the relation in the backend here!
  */
  dispatch(relationUpserted(relation))
}

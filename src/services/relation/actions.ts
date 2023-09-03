import { Dispatch } from '@reduxjs/toolkit'
import { Observable } from 'rxjs'
import { loadingProgressUpdated, loadingStateUpdated, relationUpserted } from './reducer'
import { PartialLoadItem, Relation } from './types'
import { sample } from './sample-data'
import { GetStateFunction } from '../store'

export const retrieveRelations = () => (dispatch: Dispatch, getState: GetStateFunction) => {
  const { relation } = getState()
  if (relation.loadingState !== 'idle') return // Only load if we are in idle state

  // First set the loading state to loading
  dispatch(loadingStateUpdated('loading'))

  // Then start loading the relations
  loadRelationObserver$().subscribe({
    next: ({ item, index, total }) => {
      // Update / insert the relation in the store
      dispatch(relationUpserted(item))
      const progress = Math.ceil(((index + 1) / total) * 100)
      dispatch(loadingProgressUpdated(progress))
    },
    error: (error) => {
      console.error(error)
      dispatch(loadingStateUpdated('failed'))
    },
    complete: () => {
      dispatch(loadingStateUpdated('completed'))
    },
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

      subscriber.next({ item: sample[index], index, total: sample.length })
      index++
    }, itemLoadSimulatedDelay)
  })

export const updateRelation = (relation: Relation) => (dispatch: Dispatch) => {
  /*
   Add logic to update the relation in the backend here!
  */
  dispatch(relationUpserted(relation))
}

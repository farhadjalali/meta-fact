import { Observable } from 'rxjs'
import { PartialLoadItem, Relation } from './types'

// Mock data
import sample from './sample.json'

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

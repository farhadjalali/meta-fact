import { useSelector } from 'react-redux'
import { RelationState } from './relations'

export interface RootState {
  relation: RelationState
}

export const useStore = () => useSelector<RootState, RootState>((state: RootState) => state)

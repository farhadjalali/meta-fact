import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RelationsList } from '../components/relations/RelationsList'
import { RelationState, RootState, retrieveRelations, useAppDispatch } from '../services'
import { ProgressBar } from '../components/progress-bar/ProgressBar'

export const PageRelations = () => {
  const dispatch = useAppDispatch()
  const { relations, loadingProgress } = useSelector<RootState, RelationState>((state) => state.relation)

  useEffect(() => {
    dispatch(retrieveRelations())
  }, [dispatch])

  return (
    <div className="page-relations container">
      <ProgressBar progress={loadingProgress} />
      <h1>Relations</h1>
      <RelationsList relations={relations} />
    </div>
  )
}

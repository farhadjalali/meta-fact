import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RelationsList } from '../components/relations/RelationsList'
import { $t } from '../i18n'
import { retrieveRelations, useStore } from '../services'
import { ProgressBar } from '../components/progress-bar/ProgressBar'

export const PageRelations = () => {
  const dispatch = useDispatch()

  const {
    relation: { relations, loadingProgress },
  } = useStore()

  useEffect(() => {
    dispatch(retrieveRelations() as any)
  }, [])

  return (
    <>
      <div className="page-relations container">
        <ProgressBar progress={loadingProgress} />
        <h1>{$t('relations')}</h1>
        <RelationsList relations={relations} />
      </div>
    </>
  )
}
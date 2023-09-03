import { FC, useEffect, useState } from 'react'
import { Relation, updateRelation, useStore } from '../../services'
import { $t } from '../../i18n'
import { useParams, useNavigate } from 'react-router-dom'
import './style.scss'
import { config } from '../../config'
import { useDispatch } from 'react-redux'
import { CardField } from '../card-field/CardField'
import { toast } from 'react-toastify'

export const RelationCard: FC = () => {
  const [relation, setRelation] = useState<Relation | undefined>()
  const [isDirty, setIsDirty] = useState(false)
  const { id } = useParams()
  const {
    relation: { relations },
  } = useStore()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    resetRelation()
  }, [relations, id])

  function resetRelation() {
    const rel = relations.find((relation) => relation.id === id)
    if (!rel) {
      navigate(config.notFoundUrl)
    }
    setRelation(rel)
    setIsDirty(false)
  }

  function commitChanges() {
    dispatch(updateRelation(relation!) as any)
    setIsDirty(false)
    toast($t('saved'))
  }

  function onFieldChange(ev: { name: string; newValue: string | undefined }) {
    setIsDirty(true)
    setRelation({ ...relation, [ev.name]: ev.newValue } as Relation)
  }

  if (!relation) return <></>

  return (
    <div className="relation-card">
      <div className="head">
        <div className="back-button" onClick={() => navigate(-1)}>
          &#65513;
        </div>
        <h1>{[relation.name, relation.surname].join(' ')}</h1>
      </div>

      <CardField name="name" label={$t('relation.name')} defaultValue={relation.name} onChange={onFieldChange} />
      <CardField
        name="surname"
        label={$t('relation.surname')}
        defaultValue={relation.surname}
        onChange={onFieldChange}
      />
      <CardField
        name="gender"
        label={$t('relation.gender')}
        validation={['male', 'female']}
        defaultValue={relation.gender}
        onChange={onFieldChange}
      />
      <CardField
        name="age"
        label={$t('relation.age')}
        validation={config.validation.ageRegex}
        defaultValue={String(relation.age)}
        onChange={onFieldChange}
      />
      <CardField
        name="phone"
        label={$t('relation.phone')}
        validation={config.validation.phoneRegex}
        defaultValue={relation.phone}
        onChange={onFieldChange}
      />
      <CardField
        name="email"
        label={$t('relation.email')}
        validation={config.validation.emailRegex}
        defaultValue={relation.email}
        onChange={onFieldChange}
      />
      <CardField
        name="address"
        label={$t('relation.address')}
        defaultValue={relation.address}
        onChange={onFieldChange}
      />

      {isDirty && (
        <div className="buttons-group">
          <button onClick={commitChanges}>{$t('save')}</button>
          <button onClick={resetRelation}>{$t('cancel')}</button>
        </div>
      )}
    </div>
  )
}

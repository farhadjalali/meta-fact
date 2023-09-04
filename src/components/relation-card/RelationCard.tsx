import { FC, useCallback, useEffect, useState } from 'react'
import { useAppDispatch, Relation, RelationState, RootState, updateRelation } from '../../services'
import { useParams, useNavigate } from 'react-router-dom'
import './style.scss'
import { config } from '../../config'
import { useSelector } from 'react-redux'
import { CardField } from '../../common/card-field/CardField'
import { toast } from 'react-toastify'

export const RelationCard: FC = () => {
  const [relation, setRelation] = useState<Relation | undefined>()
  const [isDirty, setIsDirty] = useState(false)
  const { id } = useParams()
  const { relations } = useSelector<RootState, RelationState>((state) => state.relation)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const resetRelation = useCallback(() => {
    const rel = relations.find((relation) => relation.id === id)
    if (!rel) {
      navigate(config.notFoundUrl)
    }
    setRelation(rel)
    setIsDirty(false)
  }, [relations, id, navigate])

  useEffect(() => {
    resetRelation()
  }, [resetRelation])

  function commitChanges() {
    dispatch(updateRelation(relation!))
    setIsDirty(false)
    toast('Saved!', { type: 'success' })
  }

  function onFieldChange(ev: { name: string; newValue: string | undefined }) {
    setIsDirty(true)
    setRelation({ ...relation, [ev.name]: ev.newValue } as Relation)
  }

  if (!relation) return <></>

  return (
    <div className="relation-card">
      <div className="relation-card-head">
        <div className="relation-card-back-button" onClick={() => navigate(-1)}>
          &#65513;
        </div>
        <h1>{[relation.name, relation.surname].join(' ')}</h1>
      </div>

      <CardField name="name" label="Name" defaultValue={relation.name} onChange={onFieldChange} />
      <CardField name="surname" label="Surname" defaultValue={relation.surname} onChange={onFieldChange} />
      <CardField
        name="gender"
        label="Gender"
        validation={['male', 'female']}
        defaultValue={relation.gender}
        onChange={onFieldChange}
      />
      <CardField
        name="age"
        label="Age"
        validation={config.validation.ageRegex}
        defaultValue={String(relation.age)}
        onChange={onFieldChange}
      />
      <CardField
        name="phone"
        label="Phone"
        validation={config.validation.phoneRegex}
        defaultValue={relation.phone}
        onChange={onFieldChange}
      />
      <CardField
        name="email"
        label="Email"
        validation={config.validation.emailRegex}
        defaultValue={relation.email}
        onChange={onFieldChange}
      />
      <CardField name="address" label="Address" defaultValue={relation.address} onChange={onFieldChange} />

      {isDirty && (
        <div className="buttons-group">
          <button className="primary" onClick={commitChanges}>
            Save
          </button>
          <button onClick={resetRelation}>Cancel</button>
        </div>
      )}
    </div>
  )
}
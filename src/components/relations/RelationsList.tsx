import { Relation } from '../../services'
import './style.scss'
import { $t } from '../../i18n'
import { useNavigate } from 'react-router'
import { FC } from 'react'

type Props = {
  relations: Relation[]
}

export const RelationsList: FC<Props> = ({ relations }) => {
  const navigate = useNavigate()

  return (
    <div className="relations-list">
      <table>
        <thead>
          <tr>
            <th>{$t('relation.name')}</th>
            <th>{$t('relation.surname')}</th>
            <th>{$t('relation.gender')}</th>
            <th>{$t('relation.age')}</th>
            <th>{$t('relation.phone')}</th>
            <th>{$t('relation.email')}</th>
            <th>{$t('relation.address')}</th>
          </tr>
        </thead>
        <tbody>
          {relations.map((relation) => {
            return (
              <tr key={relation.id} onClick={() => navigate(`/relation/${relation.id}`)}>
                <td>{relation.name}</td>
                <td>{relation.surname}</td>
                <td>{relation.gender}</td>
                <td>{relation.age}</td>
                <td>{relation.phone}</td>
                <td>{relation.email}</td>
                <td>{relation.address}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* <button onClick={onRelationAdd}>New Relation</button> */}
    </div>
  )
}

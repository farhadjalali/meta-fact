import { Relation } from '../../services'
import './style.scss'
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
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
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

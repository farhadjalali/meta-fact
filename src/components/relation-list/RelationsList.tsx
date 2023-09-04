import { RelationState, RootState, retrieveRelations, useAppDispatch } from '../../services'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ProgressBar } from '../../common/progress-bar/ProgressBar'
import './style.scss'

export const RelationsList = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { relations, loadingProgress } = useSelector<RootState, RelationState>((state) => state.relation)

  useEffect(() => {
    dispatch(retrieveRelations())
  }, [dispatch])

  return (
    <div className="relation-list">
      <ProgressBar progress={loadingProgress ?? 0} />

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
    </div>
  )
}

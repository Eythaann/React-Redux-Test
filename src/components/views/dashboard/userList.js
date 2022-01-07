import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { URL } from '../../config/apiUrl'
import { PageChange } from '../../layouts'
import styles from './dashboard.module.css'

export const UserList = () => {
  const { search } = useLocation()
  let page = new URLSearchParams(search).get('page')

  const [isloaded, setLoaded] = useState(false)

  const state = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`${URL}/users?page=${page ?? 1}`)
        const data = await res.json()
        dispatch({ type: '@users/update', payload: data })
        setLoaded(true)
      } catch (err) {
        console.log(err)
      }
    }
    getUsers()
  }, [dispatch, page])

  const handleDelete = e => {
    const { id } = e.target
    fetch(`${URL}/users/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.status === 204) dispatch({ type: '@users/delete', id: Number(id) })
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      {isloaded && (
        <div className={styles.userList}>
          <h1>Users</h1>
          <PageChange page={page ?? 1} total={state.total_pages} />
          <ul>
            {state.data.map(item => (
              <li key={item.id}>
                <img src={item.avatar} alt={item.first_name} />

                <div style={{ textAlign: 'center' }}>
                  <b>
                    {item.first_name} {item.last_name}
                  </b>
                  <br />
                  <p>{item.email}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Link to={`./${item.id}`}>
                    <button>view more</button>
                  </Link>

                  <button id={item.id} onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

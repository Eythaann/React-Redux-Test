import styles from './user.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { URL } from '../../../config/apiUrl'
import { UpdateForm } from './updateForm'

export const User = () => {
  const { id } = useParams()

  const [isloaded, setloaded] = useState(false)

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const get = async () => {
      try {
        const res1 = await fetch(`${URL}/users/${id}`)
        const res2 = await fetch(`${URL}/unkonow/${id}`)
        const [data1, data2] = await Promise.all([res1.json(), res2.json()])
        console.log(data1, data2)

        dispatch({ type: '@user/get', payload: { ...data1.data, ...data2.data } })
        setloaded(true)
      } catch (e) {
        console.log(e)
      }
    }
    get()
  }, [dispatch, id])

  if (!isloaded) return <></>
  if (!user) return <h1>User Not Found</h1>
  return (
    <div>
      <div className={styles.cover} style={{ backgroundColor: user.color }}>
        <img src={user.avatar} alt={user.first_name} />
      </div>
      <div className={styles.description}>
        <h1>
          {user.name} <UpdateForm user={user} />
        </h1>
        <h4>
          ({user.first_name} {user.last_name})
        </h4>
        <p>{new Date().getFullYear() - user.year} years</p>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

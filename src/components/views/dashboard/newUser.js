import { useState } from 'react'
import { URL } from '../../config/apiUrl'
import styles from './dashboard.module.css'

export const NewUser = () => {
  const [newUser, setNewUser] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    const target = e.target

    const data = {
      name: target.name.value,
      job: target.job.value,
    }

    const res = await fetch(`${URL}/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const data2 = await res.json()
    setNewUser(data2)
    console.log(data2)
  }

  return (
    <div className={styles.newUser}>
      <h1 style={{ textAlign: 'center' }}>New user</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="job" type="text" placeholder="Job" required />
        <button type="submit">Create</button>
        <p>
          <b>Response:</b> {JSON.stringify(newUser)}
        </p>
      </form>
    </div>
  )
}

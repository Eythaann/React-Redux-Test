import styles from './user.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const UpdateForm = ({ user }) => {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    name: user.name,
    first_name: user.first_name,
    last_name: user.last_name,
    year: user.year,
    email: user.email,
  })

  const toggleForm = () => setShowForm(!showForm)
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    console.log('sadasdsadsadsa')
    const target = e.target
    console.log(target)
    const newdata = {
      name: target.name.value,
      first_name: target.first_name.value,
      last_name: target.last_name.value,
      year: target.year.value,
    }

    dispatch({ type: '@user/update', payload: newdata })
    toggleForm()
  }

  return (
    <>
      <button onClick={toggleForm} style={{ position: 'relative', top: '-5px' }}>
        ✏️
      </button>
      <div style={{ display: showForm ? 'block' : 'none' }}>
        <div className={styles.container}>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input onChange={handleChange} name="name" value={form.name} />
            </label>

            <label>
              First Name:
              <input onChange={handleChange} name="first_name" value={form.first_name} />
            </label>

            <label>
              Last Name:
              <input onChange={handleChange} name="last_name" value={form.last_name} />
            </label>

            <label>
              Email:
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={form.email}
              />
            </label>

            <label>
              Year:
              <input
                onChange={handleChange}
                type="number"
                name="year"
                value={form.year}
              />
            </label>

            <div>
              <button
                onClick={e => {
                  e.preventDefault()
                  toggleForm()
                }}>
                Cancel
              </button>{' '}
              <button type="submit">Change</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

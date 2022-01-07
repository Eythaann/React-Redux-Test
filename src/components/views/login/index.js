import styles from './login.module.css'
import { URL } from '../../config/apiUrl'

export const Login = () => {
  if (window.localStorage.getItem('ACCESS')) {
    window.location.href = '/dashboard/users'
    return
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { target } = e

    const data = {
      email: target.email.value,
      password: target.password.value,
    }

    try {
      const res = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const dataRes = await res.json()
      if (dataRes.token) {
        window.localStorage.setItem('ACCESS', dataRes.token)
        window.location.href = '/dashboard/users'
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <div className={styles.login}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="example@email.com" required />
          <input name="password" type="password" placeholder="password" required />
          <button type="submit"> Login </button>
        </form>
      </div>
    </div>
  )
}

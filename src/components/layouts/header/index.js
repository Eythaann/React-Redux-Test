import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { LoginButton } from '../../common'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <b>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </b>
      </div>
      <div>
        <LoginButton />
      </div>
    </header>
  )
}

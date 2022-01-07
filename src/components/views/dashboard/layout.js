import { Link, Outlet } from 'react-router-dom'
import styles from './dashboard.module.css'

export const DashboardLayout = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link to="./users">Users</Link>
          </li>
          <li>
            <Link to="./create/user">New Users</Link>
          </li>
        </ul>
      </div>
      <div className={styles.children}>
        <Outlet />
      </div>
    </div>
  )
}

import { Route, Routes, Navigate } from 'react-router-dom'
import { Error404 } from '..'
import { DashboardLayout } from './layout'
import { NewUser } from './newUser'
import { User } from './user'
import { UserList } from './userList'

export const Dashboard = () => {
  if (!window.localStorage.getItem('ACCESS')) {
    window.location.href = '/login'
    return
  }

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="./users" />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/create/user" element={<NewUser />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'
import { ViewLayout } from './components/layouts'
import { Home, Login, Dashboard, Error404 } from './components/views'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ViewLayout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default App

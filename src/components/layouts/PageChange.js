import { Link } from 'react-router-dom'

const PageChange = ({ page, total }) => {
  return (
    <h2>
      {page > 1 ? (
        <Link to={`?page=${page - 1}`}>⬅️</Link>
      ) : (
        <span style={{ color: '#aaa' }}>⬅️</span>
      )}
      Page {page}
      {page < total ? (
        <Link to={`?page=${Number(page) + 1}`}>➡️</Link>
      ) : (
        <span style={{ color: '#aaa' }}>➡️</span>
      )}
    </h2>
  )
}

export default PageChange

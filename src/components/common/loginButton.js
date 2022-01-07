export const LoginButton = () => {
  const handleLogin = () => {
    if (window.localStorage.getItem('ACCESS')) {
      window.localStorage.removeItem('ACCESS')
      window.location.href = '/'
    } else window.location.href = '/login'
  }

  return (
    <button style={{ padding: '5px 1rem' }} onClick={handleLogin}>
      {window.localStorage.getItem('ACCESS') ? 'Logout' : 'Login'}
    </button>
  )
}

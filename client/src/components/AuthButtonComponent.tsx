import { useUser } from '../hooks/useUser';

const AuthButton = () => {
  const { user, toggleUserAuth } = useUser()
  return (
    <button
      onClick={toggleUserAuth}
    >
      Now: {user.isAuth ? "auth" : "not auth"}
    </button>
  )
}

export default AuthButton
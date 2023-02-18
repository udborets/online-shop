import '../styles/Footer.scss';
import { useUser } from './../hooks/useUser';


const Footer = () => {
  const { user, toggleUserAuth } = useUser()

  return (
    <div className='footer'>
      <div className="footer__container">
        <button
          onClick={toggleUserAuth}
        >
          dev: Now: {user.isAuth ? "auth" : "not auth"}
        </button>
        <button onClick={() => console.log(user.user)}>dev: Log user info</button>
        <a className='footer__link' href="https://t.me/udborets">My Telegram</a>
        <a className='footer__link' href="https://github.com/udborets/">My Github</a>
      </div>
    </div>
  )
}

export default Footer
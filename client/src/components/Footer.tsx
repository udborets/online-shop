import AuthButton from './ui/AuthButton';
import '../styles/Footer.scss';
import { useUser } from './../hooks/useUser';


const Footer = () => {
  const user = useUser()
  return (
    <div className='footer'>
      <div className="footer__container">
        <span className="footer__title">
          Footer
        </span>
        <AuthButton />
        <a href="https://github.com/udborets/">My github</a>
        <button onClick={() => console.log(user.user)}>Show user info</button>
      </div>
    </div>
  )
}

export default Footer
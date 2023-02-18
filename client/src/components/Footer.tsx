import AuthButton from './ui/AuthButton';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__container">
        <span className="footer__title">
          Footer
        </span>
        <AuthButton />
        <a href="https://github.com/udborets/">My github</a>
      </div>
    </div>
  )
}

export default Footer
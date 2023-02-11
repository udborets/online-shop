import '../styles/FooterComponent.scss';
import AuthButton from './AuthButtonComponent';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__container">
        <span className="footer__title">
          Footer
        </span>
        <AuthButton />
      </div>
    </div>
  )
}

export default Footer
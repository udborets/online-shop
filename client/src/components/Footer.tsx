import AuthButton from './AuthButton';
import '../styles/Footer.scss';

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
import '../styles/Footer.scss';
import AuthButton from './AuthButton';

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
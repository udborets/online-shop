import IRegistrationInput from '../../models/IRegistrationInput';


const RegistrationInput = ({ text, type, value, setValue }: IRegistrationInput) => {
  return (
    <div className='registration__input'>
      <input
        autoComplete="true"
        type={type}
        placeholder={text}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
    </div>
  )
}

export default RegistrationInput
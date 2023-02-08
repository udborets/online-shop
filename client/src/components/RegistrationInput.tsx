import React from 'react'
import IRegistrationInput from './../models/IRegistrationInput';

const RegistrationInput = ({ text, type }: IRegistrationInput) => {
  return (
    <div className='registration__input'>
      <input type={type} placeholder={text} />
    </div>
  )
}

export default RegistrationInput
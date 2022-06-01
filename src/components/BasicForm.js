import { useState } from "react";
import { useEffect } from "react";

const BasicForm = (props) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [firstNameDirty, setFirstNameDirty] = useState(false)
  const [lastNameDirty, setLastNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [firstNameError, setFirstNameError] = useState('First-Name не может быть пустым ')
  const [lastNameError, setLastNameError] = useState('Last-Name не может быть пустым ')
  const [emailError, setEmailError] = useState('E-Mail не может быть пустым ')
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    if (firstNameError || lastNameError || emailError) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [firstNameError, lastNameError, emailError])

  const firstNameHandler = (e) => {
    setFirstName(e.target.value)
    const regex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setFirstNameError('Некорректный имя')
      if(!e.target.value){
        setFirstNameError('Имя не может быть пустым')
      }
    } else {
      setFirstNameError("")
    }
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value)
    const regexLastName = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
    if (!regexLastName.test(String(e.target.value).toLowerCase())) {
      setLastNameError('Некорректный фамилия')
      if(!e.target.value){
        setLastNameError('Фамилия не может быть пустым')
      }
    } else {
      setLastNameError("")
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const regexEmail = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (!regexEmail.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный Емаил')
      if(!e.target.value){
        setEmailError('Email не может быть пустым')
      }
    } else {
      setEmailError("")
    }
  }


  const firstNameBlurHandler = (e) => {
    switch (e.target.id) {
      case 'name':
        setFirstNameDirty(true)
        break
      default:
    }
  }

  const lastNameBlurHandler = (e) => {
    switch (e.target.id) {
      case 'name':
        setLastNameDirty(true)
        break
      default:
    }
  }

  const EmailBlurHandler = (e) => {
    switch (e.target.id) {
      case 'name':
        setEmailDirty(true)
        break
      default:
    }
  }



  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input onChange={e => firstNameHandler(e)} value={firstName} onBlur={e => firstNameBlurHandler(e)} type='text' id='name' />
          {(firstNameDirty && firstNameError) && <p style={{ color: 'red' }}>{firstNameError}</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input onChange={e => lastNameHandler(e)} value={lastName} onBlur={e => lastNameBlurHandler(e)} type='text' id='name' />
          {(lastNameDirty && lastNameError) && <p style={{ color: 'red' }}>{lastNameError}</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input onChange={e => emailHandler(e)} value={email} onBlur={e => EmailBlurHandler(e)} type='text' id='name' />
        {(emailDirty && emailError) && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

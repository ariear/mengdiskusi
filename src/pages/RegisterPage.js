import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../states/users/action'
import RegisterInput from '../components/RegisterInput'

function RegisterPage () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }))

    navigate('/')
  }

  return (
    <div className='main-auth'>
        <h2 className='title-auth'>Register To Mengdiskusi</h2>
        <div className='wrap-content-auth'>
          <RegisterInput register={onRegister} />
          <p>Already have an account? <Link to='/'>Login</Link></p>
        </div>
    </div>
  )
}

export default RegisterPage

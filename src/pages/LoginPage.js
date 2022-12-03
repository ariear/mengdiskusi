import React from 'react'
import { useDispatch } from 'react-redux'
import LoginInput from '../components/LoginInput'
import { asyncSetAuthUser } from '../states/authUser/action'

function LoginPage () {
  const dispatch = useDispatch()

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
  }

  return (
    <div className='main-auth'>
        <h2 className='title-auth'>Login To Mengdiskusi</h2>
        <div className='wrap-content-auth'>
          <LoginInput login={onLogin} />
          <p>Dont have an account? <a href='/register'>Register</a></p>
        </div>
    </div>
  )
}

export default LoginPage

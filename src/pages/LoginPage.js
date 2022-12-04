import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
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
          <p>Dont have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  )
}

export default LoginPage

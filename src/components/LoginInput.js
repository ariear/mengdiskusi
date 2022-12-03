import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

function LoginInput ({ login }) {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  return (
    <form>
        <div className='wrap-input'>
            <label>Email</label>
            <input type='email' value={email} onChange={onEmailChange} />
        </div>
        <div className='wrap-input'>
            <label>Password</label>
            <input type='password' value={password} onChange={onPasswordChange} />
        </div>
        <button type='button' className='btn-auth' onClick={() => login({ email, password })} >Login</button>
    </form>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginInput

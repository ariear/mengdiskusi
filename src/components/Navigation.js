import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navigation ({ authUser, signOut }) {
  const { name } = authUser

  return (
    <nav>
      <h1><Link to='/'>Mengdiskusi</Link></h1>
      <div>
        <p>Welcome {name}</p>
        <button type="button" onClick={signOut}>Sign out</button>
      </div>
    </nav>
  )
}

const authUserShape = {
  name: PropTypes.string.isRequired
}

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired
}

export default Navigation

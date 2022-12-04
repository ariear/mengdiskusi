import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ThreadInput from '../components/ThreadInput'
import { asyncAddThread } from '../states/threads/action'

function AddThreadPage () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }))

    navigate('/')
  }

  return (
    <div className='main-page'>
      <h1>Create A New Discussion</h1>
      <ThreadInput addThread={onAddThread} />
    </div>
  )
}

export default AddThreadPage

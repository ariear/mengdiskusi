import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ThreadsList from '../components/ThreadsList'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import { BsFillPlusCircleFill } from 'react-icons/bs'

function HomePage () {
  const {
    threads = [],
    users = [],
    authUser
  } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id
  }))

  return (
    <div className='main-page'>
        <h1>Discussion available</h1>
        <ThreadsList threads={threadList} />
        <Link to='/new' className='btn-plus' ><BsFillPlusCircleFill size={60} /></Link>
    </div>
  )
}

export default HomePage

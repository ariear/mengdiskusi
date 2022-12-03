import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import { asyncAddThread } from '../states/threads/action'

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

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }))
  }

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.user),
    authUser: authUser.id
  }))

  return (
    <div>
        <p>HomePage</p>
    </div>
  )
}

export default HomePage

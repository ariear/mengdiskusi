import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { asyncReceiveThreadDetail, asyncAddThreadComment } from '../states/threadDetail/action'
import ThreadDetail from '../components/ThreadDetail'
import ThreadCommentInput from '../components/ThreadCommentInput'
import ThreadCommentList from '../components/ThreadCommentList'

function DetailPage () {
  const { id } = useParams()
  const {
    threadDetail = null
  } = useSelector((states) => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  const onAddCommentThread = ({ content }) => {
    dispatch(asyncAddThreadComment({ threadId: id, content }))
  }

  if (!threadDetail) {
    return null
  }

  return (
    <div className='main-page'>
        <ThreadDetail {...threadDetail} />
        <ThreadCommentInput addCommentThread={onAddCommentThread} />
        <ThreadCommentList comments={threadDetail.comments} />
    </div>
  )
}

export default DetailPage

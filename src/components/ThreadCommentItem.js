import React from 'react'
import PropTypes from 'prop-types'
import { postedAt } from '../utils'

function ThreadCommentItem ({ content, createdAt, owner }) {
  return (
    <div className='card-comment'>
        <div className='desc-card-comment'>
            <div>
                <img src={owner.avatar} />
                <p>{ owner.name }</p>
            </div>
            <p>{ postedAt(createdAt) }</p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: content }} className='card-comment-content' ></p>
    </div>
  )
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

const threadCommentItemShape = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired
}

ThreadCommentItem.propTypes = {
  ...threadCommentItemShape
}

export { threadCommentItemShape }

export default ThreadCommentItem

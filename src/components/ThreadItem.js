import React from 'react'
import PropTypes from 'prop-types'

function ThreadItem ({ id, title, body, category, createdAt, totalComments, ownerId }) {
  return (
    <div></div>
  )
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  ownerId: PropTypes.string.isRequired
}

ThreadItem.propTypes = {
  ...threadItemShape
}

export { threadItemShape }

export default ThreadItem

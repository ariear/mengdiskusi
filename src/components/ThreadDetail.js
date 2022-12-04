import React from 'react'
import PropTypes from 'prop-types'
import { postedAt } from '../utils'

function ThreadDetail ({ title, body, createdAt, owner, category }) {
  return (
    <div>
        <h1>{ title }</h1>
        <p className='category'>#{ category }</p>
        <p className='child-desc-detail'>Made by <img src={owner.avatar} /> { owner.name }  - { postedAt(createdAt) } </p>
        <p dangerouslySetInnerHTML={{ __html: body }}></p>
    </div>
  )
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  category: PropTypes.string.isRequired
}

export default ThreadDetail

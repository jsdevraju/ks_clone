import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({text, url}) => {
  return (
    <>
        <li>
            <Link to={url}>
                {text}
            </Link>
        </li>
    </>
  )
}

export default Item
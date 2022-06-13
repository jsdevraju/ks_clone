import React from 'react'
import './style.css';

const ServiceContent = ({icon, title, description, className}) => {
  return (
    <>
        <div className={className}>
            <img src={icon} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </>
  )
}

export default ServiceContent
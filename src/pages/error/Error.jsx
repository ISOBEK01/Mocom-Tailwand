import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>404</h1>
      <br />
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}

export default Error

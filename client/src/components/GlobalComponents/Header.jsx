import React from 'react'
import { Outlet, Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        Header 
        <Link to="/login">Login</Link>
        <Link to="/about">about</Link>
        <Outlet />
    </div>
  )
}

export default Header
import React from 'react'
import './header.css'

function Header() {
  return (
    <div className="header_container">
        <div>logo</div>
        <div>
            <ul>
                <li>My To-Do</li>
                <li>About</li>
                <li>LOGIN</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
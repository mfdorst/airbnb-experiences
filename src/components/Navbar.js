import React from 'react'
import logo from '../images/airbnb-logo.svg'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img class="logo" src={logo} alt="Airbnb logo" />
    </nav>
  )
}

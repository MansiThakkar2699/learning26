import React from 'react'
import logo from '../assets/images/user.jpg'
import "../assets/css/header.css"

export const HeaderComponent = () => {
  return (
    <div className="header">
        <h1>Mansi Thakkar</h1>
        <img src={logo} alt="Profile Image" className="profile" />
    </div>
  )
}

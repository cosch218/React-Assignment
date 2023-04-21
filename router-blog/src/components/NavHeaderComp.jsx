import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavHeaderComp() {
  return (
    <div className='nav'>
      <ul className='navlist'>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/storylist'}>Story</NavLink></li>
      </ul>
    </div>
  )
}

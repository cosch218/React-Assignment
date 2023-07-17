import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Storylist() {
  return (
    <div>
      <h1>Storylist</h1>
      <Link to='/storylist/apple'>appleStory</Link>
      <Link to='/storylist/orange'>orangeStory</Link>
      <Link to='/storylist/peach'>peachStory</Link>
      <Outlet/>
    </div>
  )
}

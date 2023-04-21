import React from 'react'
import { Outlet } from 'react-router-dom'

import NavHeaderComp from '../components/NavHeaderComp'

export default function Layout() {
  return (
    <div>
      <NavHeaderComp/>
      <Outlet/>
    </div>
  )
}

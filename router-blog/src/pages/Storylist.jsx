import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import DataContext from '../context/DataContext'


export default function Storylist() {

  const {state} = useContext(DataContext);

  return (
    <div>
      <h1>Storylist</h1>
      <ul className='storylist'>
      {
          state.storylist.map( (story, id) => (
            <li key={id}>
              <NavLink 
                to={`/storylist/${story.name}`}
                className={
                  ({isActive}) => isActive ? "on" : "" 
                }
              >
                {story.name}Story
              </NavLink>
            </li>
          ) )
        }
      </ul>
      <Outlet/>
    </div>
  )
}

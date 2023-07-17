import React, { useContext } from 'react'
import { Link } from 'react-router-dom';


import DataContext from '../context/DataContext'


export default function StorylistComp() {

  const {state} = useContext(DataContext);

  return (
    <div>
      <ul>
        {
          state.storylist.map( (story, id) => (
            <li key={id}>
              <Link to={`/storylist/${story.name}`}>
                {story.name}
              </Link>
            </li>
          ) )
        }
      </ul>
    </div>
  )
}

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'


import DataContext from '../context/DataContext';


export default function Story() {

  const {name} = useParams();

  const {state} = useContext(DataContext);

  const story = state.storylist.find( (s) => (s.name === name) )


  return (
    <div className='story'>
      <h3 className='storyname'>{name}-Story</h3>
      <div className='storyimgwrap'>
        <img src={story.picture} alt="" className='storyimg'/>
      </div>
      <p className='storydetail'>{story.detail}</p>
    </div>
  )
}

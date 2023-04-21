import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className='home'>
        <img src="/logo192.png" className='homeimg'/>
        <div className='content'>
          <p>react와 router로 작성된 페이지입니다</p>
          <p>환영합니다</p>
        </div>
        
      </div>
    </div>
  )
}

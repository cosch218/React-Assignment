import React, { useContext } from 'react'
import { useParams } from 'react-router'
import DataContext from '../context/DataContext'

export default function Story() {
  const { state } = useContext(DataContext);
  const { fruitlist } = state;

  const { name } = useParams();

  // find 값 하나만 출력 (filter는 값을 배열로 출력)
  // 값이 없으면 undefined 출력
  const fruit = fruitlist.find((f)=>(f.name === name))

  return (
    <div>
      <h3>{name}-story</h3>
      {
        fruit && (
          <div>
            <img src={fruit.picture} alt="" width={"500px"}/>
            <p>{fruit.detail}</p>
          </div>
        )
      }
    </div>
  )
}

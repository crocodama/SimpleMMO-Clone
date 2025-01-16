import React, { useState } from 'react'
interface CardProps{
    name: string,
    level: number
}
export default function Card(props:CardProps) {
    const [level, setLevel] = useState(props.level)

  return (
    <div>
        <h1>{props.name}</h1>
        <h2 onClick={()=>setLevel(level + 1)}>{level}</h2>
    </div>
  )
}

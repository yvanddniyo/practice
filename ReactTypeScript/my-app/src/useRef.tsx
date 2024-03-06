import React, { useRef } from 'react'

interface props {
    name: string,
    age: number
}

const Person: React.FC = () => {
    // useRef in react as a hook
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
        <input type='text' ref={inputRef} />
    </div>
  )
}

export default Person
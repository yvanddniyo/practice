import React, { useState } from 'react'

interface   Props {
    name: string,
    age: number
}

const Person: React.FC<Props> = ({name, age}) => {
    // useState in react as a hook
    const [cash, setCash] = useState<number | null>(1);
    // setCash(null);


  return (
    <div className='profile'>
        <div>{name}</div>
        <div>{age}</div>
    </div>
  );
};

export default Person
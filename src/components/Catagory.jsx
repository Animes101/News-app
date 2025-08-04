import React, { useEffect, useState } from 'react'

const Catagory = () => {
    const [catagory, setCatagory]=useState(null);

    useEffect(()=>{

        fetch('catagory.json')
        .then(res=> res.json())
        .then(data=> setCatagory(data));

    },[])
  return (
    <div>
        <ul>
           {catagory&& catagory.map((item)=>{
            return (
                <li className='cursor-pointer hover:text-gray-400' key={item.id}>{item.name}</li>
            )
           })}
        </ul>
    </div>
  )
}

export default Catagory
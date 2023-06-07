import React, { useState } from 'react'


function Colors() {
    const [colors, setColors] = useState(['blue', 'red', 'green'])

function handleClick(){
    setColors(prev => ([...prev, Math.random()]))
}

  return (
    <div>

<h2>Colors </h2>

{
    colors.map((color, index) => (<div  key={index}>{color}</div>))
}

<button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Colors
import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);


useEffect(()=>{
console.log('component did mount')
let interval = setInterval(() => {
    console.log('test')
    setCount((prev) => prev + 1)
}, 1000);



return ()=> clearInterval(interval)
},[])



  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + amount)}> Increment </button> 
       {/* callback func (prev) */}

      <br />
      <hr />
      <div>Increment: + {amount}</div>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(3)}>3</button>
      <button onClick={() => setAmount(10)}>10</button>
    </div>
  );
}

export default Counter;

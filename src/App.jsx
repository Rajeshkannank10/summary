import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [count1,setcount1]=useState(0);
  
  return (
    <><div class="container text-center">
    <div class="row align-items-start">
      <div class="col">
      <h1>Shop cart</h1>
      <img src ="../images/pama.jpg" alt="pama" width="200" height="200"></img>
      <h2>Puma-20$</h2>
      <div className="cards">
        
        <button className="Add" onClick={() => setCount((count)=>count+1)}>
          +
        </button>
        <p className="sli">Qnty{count}</p>
        <button disabled={(count == 0 )} className="Sub" onClick={() => setCount((count) => count -1)} >
          -
        </button><b />       
        
      </div>
      </div>
      <div class="col">
      
      </div>
      <div class="col">
      <div className="sum">
      
        <h2>Total Amount</h2>
        <p>Total Quantity={count} </p>
        <p>Total price-{ count*20 }$</p>
      </div>
      </div>
    </div>
  </div>

      
    </>
    
  )
}

export default App

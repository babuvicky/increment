import React, { useState } from "react";
import './style.css'

export default function Sum() {
   const [change, usechange] = useState(0)

   const Increment = () => {
      usechange(change + 1);
   }
   const Decrement = () => {
      usechange(change - 1)
   }
   const reset = () => {
      usechange(0)
   }
   return (
      <>

         <h1>Counter</h1>
         <div className="container">

            <div className="but">

               <button onClick={Decrement}> - </button>
               <p>{change}</p>
               <button onClick={Increment}>+</button>

            </div>

            <div className="reset">

               <button onClick={reset}>Reset</button>
            </div>
         </div>
      </>
   )
}
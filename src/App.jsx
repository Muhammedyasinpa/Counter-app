import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'



function App() {
       const [amount,setAmount]=useState(0)

        const dispatch=useDispatch()
        const count =useSelector(state=>state.counterReducer.count)
        const handleIncrementByAmount =()=>{
          if(amount){
            dispatch(incrementByAmount(amount))
          }
          else{
            alert("Enter a Valid Amount")
          }
        }
  return (
  
    <div className='border rounded p-5 text-center'>
      <h1 className='fw-bolder'>Counter App</h1>
        <h1 style={{fontSize:'80px'}}>{count}</h1>
    <div style={{width:'500px',marginLeft:'37%'}} className="d-flex justify-content-around  mt-5">
<button onClick={()=>dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
<button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
<button onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>

    </div>

    <div className='d-flex justify-content-center mt-5'>
<input onChange={e=>setAmount(e.target.value)} type="text" className='form control bg-white' placeholder='Increment Amount' />
<button onClick={handleIncrementByAmount} className='btn btn-primary ms-4'>INCREMENT BY AMOUNT</button>

    </div>
</div>

  )
}

export default App

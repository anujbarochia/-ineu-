import React,{useState} from "react"
import './App.css'
const Counterapp=()=>{
const [value,updatevalue]=useState(0)
const decreament=()=>{
    if(value===0){
        updatevalue(0)
    }
    else{
        updatevalue(value-1)
    }
}
const increament=()=>{
  updatevalue(value+1)
    
}
const changevalue=(e)=>{
    updatevalue(e.target.value)
}
    return(
        <div className="counter">
        <button onClick={decreament} className="button">-</button>
         <input type="text" value={value} onChange={changevalue}  readOnly/>
         <button onClick={increament} className="button">+</button>
        </div>
    )
}
export default Counterapp
import React,{useState} from 'react'
import './App.css'
const Calculator=()=>{
    const [value,updatevalue]=useState("")
    const [equation,updateequation]=useState("")
    const inputfield=(e)=>{
     
             updatevalue(e.target.value);
    }
    const clicked=(e)=>{
        console.log(e)
        if(e==="="){
           let result=null
            
            
            try{
                result=eval(equation)
            }
            catch{
                result='error'
            }
            updatevalue(result.toString())
            updateequation(result)

        }
        else if(e==="Ac"){
                updatevalue("")
                updateequation("")

        }
        else{
          
           updatevalue((prevalue)=>prevalue+e)
            updateequation((firstone)=>
              firstone+e
            )
            
        }
    }

    return(
        <>
        <input value={value} type='text'  onChange={inputfield} readOnly className='inputfield'/>
        <div className='flex'>
            <button onClick={()=>clicked(')')} className='buttons'>(</button>
            <button onClick={()=>clicked('(')} className='buttons'>)</button>
            <button onClick={()=>clicked('%')} className='buttons'>%</button>
            <button onClick={()=>clicked('Ac')} className='buttons'>Ac</button>
        </div>
        <div className='flex'>
            <button onClick={()=>clicked('7')} className='buttons'>7</button>
            <button onClick={()=>clicked('8')} className='buttons'>8</button>
            <button onClick={()=>clicked('9')} className='buttons'>9</button>
            <button onClick={()=>clicked('/')} className='buttons'>/</button>
        </div>
        <div className='flex'>
            <button onClick={()=>clicked('4')} className='buttons'>4</button>
            <button onClick={()=>clicked('5')} className='buttons'>5</button>
            <button onClick={()=>clicked('6')} className='buttons'>6</button>
            <button onClick={()=>clicked('*')} className='buttons'>*</button>
        </div>
        <div className='flex'>
            <button onClick={()=>clicked('1')} className='buttons'>1</button>
            <button onClick={()=>clicked('2')} className='buttons'>2</button>
            <button onClick={()=>clicked('3')} className='buttons'>3</button>
            <button onClick={()=>clicked('-')} className='buttons'>-</button>
        </div>
        <div className='flex'>
            <button onClick={()=>clicked('0')} className='buttons'>0</button>
            <button onClick={()=>clicked('.')} className='buttons'>.</button>
            <button onClick={()=>clicked('=')} className='buttons'>=</button>
            <button onClick={()=>clicked('+')} className='buttons'>+</button>
        </div>
        </>
    )
}
export default Calculator
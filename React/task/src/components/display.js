import React,{useState} from "react";
import './style.css'

const Display=()=>{
    const [tasks,updatetask]=useState([])
    const [input,updateinput]=useState('')
    const Display_task=(e)=>{
        e.preventDefault()
        updatetask([...tasks,input])
        console.log(tasks)
        updateinput('')
    }
    return(
        <div className="container">
        <form onClick={Display_task}>
            <input placeholder='Enter the task' value={input} onChange={(e)=>updateinput(e.target.value)} className="input_field" />
            <button type="submit" className="Button">Task</button>
        </form>

    {
        tasks.map((task,index)=>{
            return <p key={index} className="content">{task}</p>
        })
    }
        </div>
    )
}

export default Display
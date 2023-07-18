import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css'



const Login=()=>{
    const [email,updateemail]=useState('')
    const [password,updatepassword]=useState('')
    const [error,updateerror]=useState(false)
    const navigate=useNavigate()
   
    const FetchDetails=async()=>{
        try{
            const response = await axios.post('https://reqres.in/api/login',{email,password})
            console.log(response.data)
            navigate('/display')
           
        }
        catch{
         updateerror(true)
        }

}
    const login=(e)=>{
        e.preventDefault()
        if((email.length===0&&password.length===0)||(password.length===0)||(email.length===0)){
            alert("Fill the form First")
            updateerror(false)
        }
        else{
            FetchDetails()
        }
        
        updateemail('')
        updatepassword('')
    }

    return(
        <>
         {
            error?
            <div>Login failed</div>
            :
            ""
         }
        
        <form className="form">
        <h1 className="login_heading">Login</h1>
            <input type='email' placeholder="Enter the mail" value={email} onChange={(e)=>updateemail(e.target.value)} className="input_field"/>
            <input type="password" placeholder='Enter the password' value={password} onChange={(e)=>updatepassword(e.target.value)} className="input_field" />
            <button onClick={login} className="Button">Login</button>
        </form>

        
        
        </>
    )
}
export default Login
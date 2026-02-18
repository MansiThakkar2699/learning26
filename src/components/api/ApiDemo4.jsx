import React from 'react'
import axios from 'axios'

export const ApiDemo4 = () => {
    const addUser = async()=>{
        //form -->
        const userObj = {
            name:"mansi",
            age:23,
            email:"mansi@gmail.com",
            password:"mansi123",
            isActive:true
        }

        //post(url,obj)
        try{
        const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
        console.log(res)
        console.log(res.data)
        }catch(err){
            console.log(err)
            alert("error while adding user")
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 4</h1>
        <button onClick={()=>{addUser()}}>ADD</button>
    </div>
  )
}

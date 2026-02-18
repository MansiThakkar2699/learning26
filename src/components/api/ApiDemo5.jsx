import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const ApiDemo5 = () => {

    const {register,handleSubmit} = useForm()
    
    const submitHandler = async(data)=>{
        try{
            const res = await axios.post("https://node5.onrender.com/user/user/",data)
            console.log(res)
            console.log(res.data)
        }catch(err){
            console.log(err)
            alert("error while adding user")
        }
    }
  return (
    <div>
        <h1>ApiDemo5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name:</label>
                <input type="text" {...register("name")}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" {...register("email")}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" {...register("password")}/>
            </div>
            <div>
                <label>Age:</label>
                <input type="number" {...register("age")}/>
            </div>
            <div>
                <label>Active:</label>
                <input type="checkbox" {...register("isActive")}/>
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    </div>
  )
}

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit} = useForm()
    const [userData, setuserData] = useState({})
    const [isSubmited, setisSubmited] = useState(false)

    const submitHandler = (data)=>{
        console.log(data) //{} object
        setuserData(data)
        setisSubmited(true)
    }
  return (
         <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>FirstName</label>
            <input type='text' placeholder='enter name' {...register("firstName")}></input>
          </div>
          <div>
            <label>LastName</label>
            <input type='text' {...register("lastName")}></input>
          </div>
          <div>
            <label>Email</label>
            <input type='text' {...register("email")}></input>
          </div>
          <div>
            <label>Address</label>
            <textarea name="address" {...register("address")}></textarea>
          </div>
          <div>
            <label>Date</label>
            <input type="date" {...register("date")}/>
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h6>First Name = {userData.firstName}</h6>
          <h6>Last Name = {userData.lastName}</h6>
          <h6>Email = {userData.email}</h6>
          <h6>Address = {userData.address}</h6>
          <h6>Date = {userData.date}</h6>
        </div>
          }
        
    </div>
  )
}

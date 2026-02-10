import React from 'react'
import { useState } from 'react'

export const InputDemo2 = () => {
    const[name,setName] = useState("")
    const[age,setAge] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[role,setRole] = useState("")
    const[country,setCountry] = useState("")
    const[state,setState] = useState("")
    const[city,setCity] = useState("")
    const[address,setAddress] = useState("")
    const[gender,setGender] = useState("")
    
    const nameHandler = (event)=>{
        console.log(event.target.value);
        setName(event.target.value)
    }
    const ageHandler = (event)=>{
        console.log(event.target.value);
        setAge(event.target.value)
    }
    const emailHandler = (event)=>{
        console.log(event.target.value);
        setEmail(event.target.value)
    }
    const passwordHandler = (event)=>{
        console.log(event.target.value);
        setPassword(event.target.value)
    }
    const roleHandler = (event)=>{
        console.log(event.target.value);
        setRole(event.target.value)
    }
    const countryHandler = (event)=>{
        console.log(event.target.value);
        setCountry(event.target.value)
    }
    const stateHandler = (event)=>{
        console.log(event.target.value);
        setState(event.target.value)
    }
    const cityHandler = (event)=>{
        console.log(event.target.value);
        setCity(event.target.value)
    }
    const addressHandler = (event)=>{
        console.log(event.target.value);
        setAddress(event.target.value)
    }
    const genderHandler = (event)=>{
        console.log(event.target.value);
        setGender(event.target.value)
    }
  return (
    <div>
        <h1>InputDemo2</h1>
        <div>
            <label>Name</label>
            <input type="text" onChange={(event)=>{nameHandler(event)}}/>
            {name}
        </div>
        <div>
            <label>Age</label>
            <input type="text" onChange={(event)=>{ageHandler(event)}}/>
            {age}
        </div>
        <div>
            <label>Email</label>
            <input type="text" onChange={(event)=>{emailHandler(event)}}/>
            {email}
        </div>
        <div>
            <label>Password</label>
            <input type="text" onChange={(event)=>{passwordHandler(event)}}/>
            {password}
        </div>
        <div>
            <label>Role</label>
            <input type="text" onChange={(event)=>{roleHandler(event)}}/>
            {role}
        </div>
        <div>
            <label>Country</label>
            <input type="text" onChange={(event)=>{countryHandler(event)}}/>
            {country}
        </div>
        <div>
            <label>State</label>
            <input type="text" onChange={(event)=>{stateHandler(event)}}/>
            {state}
        </div>
        <div>
            <label>City</label>
            <input type="text" onChange={(event)=>{cityHandler(event)}}/>
            {city}
        </div>
        <div>
            <label>Address</label>
            <input type="text" onChange={(event)=>{addressHandler(event)}}/>
            {address}
        </div>
        <div>
            <label>Gender</label>
            <input type="text" onChange={(event)=>{genderHandler(event)}}/>
            {gender}
        </div>
    </div>
  )
}

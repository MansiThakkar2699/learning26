import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const getUsers = async() => {
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response);
        console.log(response.data) //api response.
        console.log(response.data.message)
        setmessage(response.data.message)
        console.log(response.data.data) //array
        setusers(response.data.data)
    }
  return (
    <div>
        <h1>ApiDemo1</h1>
        <button onClick={()=>{getUsers()}}>GET</button>
        <h1>MESSAGE = {message}</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>AGE</th>
                    <th>ISACTIVE</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map((user)=>{
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.age}</td>
                        <td>{user.isActive == true ? "TRUE" : "FALSE"}</td>
                    </tr> 
                })
            }
            </tbody>
        </table>
    </div>
  )
}

import React from 'react'

export default function ContentComponent() {
    var student = {
        name : "Mansi Thakkar",
        dob : "26/12/1999",
        age : 23,
        birth : "Radhanpur",
        height : 4.9,
        weight : 50,
        contact : 9099743756,
        email : "mansithakkar2699@gmail.com",
        address : "Deesa,B.K"
    };
    return (
    <div style={{backgroundColor:"white",border:"5px solid red",padding:"10px"}}>
        <h3>Date of Birth : {student.dob}</h3>
        <h3>Age : {student.age} years</h3>
        <h3>Birth Place : {student.birth}</h3>
        <h3>Height : {student.height} ft</h3>
        <h3>Weight : {student.weight} kg</h3>
        <h3>Contact No : {student.contact}</h3>
        <h3>Email Id : {student.email}</h3>
        <h3>Address : {student.address}</h3>
    </div>
  )
}

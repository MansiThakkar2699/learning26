import React from 'react'

export const MapDemo8 = () => {
    var users = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "email": "amit.sharma@gmail.com",
    "role": "Admin",
    "city": "Mumbai",
    "age": 32
  },
  {
    "id": 2,
    "name": "Priya Patel",
    "email": "priya.patel@gmail.com",
    "role": "Manager",
    "city": "Ahmedabad",
    "age": 28
  },
  {
    "id": 3,
    "name": "Rahul Verma",
    "email": "rahul.verma@gmail.com",
    "role": "User",
    "city": "Delhi",
    "age": 24
  },
  {
    "id": 4,
    "name": "Sneha Iyer",
    "email": "sneha.iyer@gmail.com",
    "role": "User",
    "city": "Pune",
    "age": 26
  },
  {
    "id": 5,
    "name": "Kunal Mehta",
    "email": "kunal.mehta@gmail.com",
    "role": "Moderator",
    "city": "Bengaluru",
    "age": 30
  },
  {
    "id": 6,
    "name": "Neha Singh",
    "email": "neha.singh@gmail.com",
    "role": "User",
    "city": "Jaipur",
    "age": 22
  }
]

  return (
    <div>
        <h1>MAP DEMO 8</h1>
        <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ROLE</th>
                        <th>CITY</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return <tr style={{backgroundColor:user.role == "User" && 'yellow'}}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td style={{backgroundColor:user.role == "Admin" && "red"}}>{user.role}</td>
                                <td style={{backgroundColor:user.city == "Ahmedabad" && "blueviolet"}}>{user.city}</td>
                                <td style={{color: user.age > 25 && "green"}}>{user.age}</td>
                            </tr>
                        })
                    }
                </tbody>
        </table>
    </div>
  )
}

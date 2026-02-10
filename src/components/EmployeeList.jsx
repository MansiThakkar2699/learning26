import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'

export const EmployeeList = (props) => {
    console.log("emplist ",props)
  return (
    <div>
        <h1>EmployeeList</h1>
        <h1>{props.title}</h1>
        <h6>{props.company.name}</h6>
        <h6>{props.company.year}</h6>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <SubEmployeeList title = {props.title}></SubEmployeeList>
    </div>
  )
}

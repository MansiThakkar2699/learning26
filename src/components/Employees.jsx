import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = () => {
  var title = "EMPLOYEE APP";

  var company = {
    name: "TCS",
    year: 2026,
  };

  var employees = [
    { id: 101, name: "parth", age: 23 },
    { id: 102, name: "jay", age: 24 },
    { id: 103, name: "raj", age: 25 },
    { id: 104, name: "ajay", age: 23 },
  ];

  return (
    <div style={{textAlign:"center"}}>
        <h1>Employees</h1>
        <EmployeeList title={title} company={company} employees={employees}></EmployeeList>
    </div>
  )
}

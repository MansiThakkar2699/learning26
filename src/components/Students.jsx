import React from 'react'
import { StudentList } from './StudentList'

export const Students = () => {
  var title = "STUDENT APP";

  var university = {
    name: "GLS",
    year: 2023,
  };

  var students = [
    { id: 101, name: "parth", age: 23 },
    { id: 102, name: "jay", age: 24 },
    { id: 103, name: "raj", age: 25 },
    { id: 104, name: "ajay", age: 23 },
  ];
  return (
    <div>
        <h1>Students</h1>
        <StudentList title={title} university={university} students={students}></StudentList>
    </div>
  )
}

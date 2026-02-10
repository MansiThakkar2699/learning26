import React from 'react'
import { Result } from './Result'

export const StudentList = (props) => {
  return (
    <div>
        <h1>StudentList</h1>
        <h1>{props.title}</h1>
        <h6>{props.university.name}</h6>
        <h6>{props.university.year}</h6>
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
                    props.students.map((stu)=>{
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <Result title={props.title}></Result>
    </div>
  )
}

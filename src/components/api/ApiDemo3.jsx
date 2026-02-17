import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {

    const [comments, setcomments] = useState([])
    const getComments = async() => {
        const response = await axios.get("https://dummyjson.com/comments")
        console.log(response);
        console.log(response.data) //api response.
        console.log(response.data.comments) //array
        setcomments(response.data.comments)
    }
  return (
    <div>
        <h1>ApiDemo3</h1>
        <button onClick={()=>{getComments()}}>GET</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>BODY</th>
                    <th>POST ID</th>
                    <th>LIKES</th>
                    <th>USER NAME</th>
                </tr>
            </thead>
            <tbody>
            {
                comments.map((comment)=>{
                    return <tr>
                        <td>{comment.id}</td>
                        <td>{comment.body}</td>
                        <td>{comment.postId}</td>
                        <td>{comment.likes}</td>
                        <td>{comment.user.fullName}</td>
                    </tr> 
                })
            }
            </tbody>
        </table>
    </div>
  )
}

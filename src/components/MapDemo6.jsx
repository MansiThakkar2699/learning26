import React from 'react'
import cBook from '../assets/images/ansi-c.jpg'
import cppBook from '../assets/images/c++.jpg'
import javaBook from '../assets/images/java.jpg'
import pythonBook from '../assets/images/python.jpg'
import sqlBook from '../assets/images/sql.jpg'
import dsaBook from '../assets/images/data-structure.jpg'

export const MapDemo6 = () => {
    var books = [
        { id: 1, name: "ANSI C", coverimage: cBook, author: "E. Balagurusamy", publisher: "McGraw Hill", price: 500 },
        { id: 2, name: "OBJECT ORIENTED PROGRAMMING WITH C++", coverimage: cppBook, author: "E. Balagurusamy", publisher: "McGraw Hill", price: 600 },
        { id: 3, name: "Java Programming", coverimage: javaBook, author: "Joyce Farrell", publisher: "Dreamtech Press", price: 550 },
        { id: 4, name: "Python: For Beginners", coverimage: pythonBook, author: "Timothy C. Needham", publisher: "Whiteflowerpublsihing", price: 1500 },
        { id: 5, name: "Introduction to SQL", coverimage: sqlBook, author: "Rick F. van der Lans", publisher: "Addison-Wesley Professional", price: 1000 },
        { id: 6, name: "Data Structures and Algorithms Implementation through C", coverimage: dsaBook, author: "Dr Brijesh Bakariya", publisher: "BPB Publications", price: 500 },
        { id: 7, name: "Data Science", coverimage: "", author: "Dr Brijesh Patel", publisher: "BPK Publications", price: 500 },
    ]
    return (
        <div style={{ textAlign: "center" }} className='p-3'>
            <h1>MAP DEMO 6</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>COVER IMAGE</th>
                        <th>AUTHOR</th>
                        <th>PUBLISHER</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book) => {
                            return <tr style={{backgroundColor:book.author =="E. Balagurusamy" && "green"}}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td><img src={book.coverimage} alt={book.name} width="80" height="100"/></td>
                                <td>{book.author}</td>
                                <td style={{color:book.publisher =="McGraw Hill" && "black"}}>{book.publisher}</td>
                                <td style={{backgroundColor:book.price > 500 && "red"}}>{book.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

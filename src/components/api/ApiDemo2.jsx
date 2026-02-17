import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {

    const [products, setproducts] = useState([])
    const getProducts = async() => {
        const response = await axios.get("https://dummyjson.com/products")
        console.log(response);
        console.log(response.data) //api response.
        console.log(response.data.products) //array
        setproducts(response.data.products)
    }
  return (
    <div>
        <h1>ApiDemo2</h1>
        <button onClick={()=>{getProducts()}}>GET</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                    <th>DISCOUNT</th>
                    <th>RATING</th>
                    <th>STOCK</th>
                </tr>
            </thead>
            <tbody>
            {
                products.map((product)=>{
                    return <tr>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.discountPercentage}</td>
                        <td>{product.rating}</td>
                        <td>{product.stock}</td>
                    </tr> 
                })
            }
            </tbody>
        </table>
    </div>
  )
}

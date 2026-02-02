import React from 'react'

export const MapDemo7 = () => {
    var products = [
        {
            "id": 1,
            "name": "iPhone 14",
            "category": "Electronics",
            "subcategory": "Mobile",
            "price": 79999,
            "qty": 10
        },
        {
            "id": 2,
            "name": "Samsung Galaxy S23",
            "category": "Electronics",
            "subcategory": "Mobile",
            "price": 74999,
            "qty": 15
        },
        {
            "id": 3,
            "name": "Dell Inspiron 15",
            "category": "Electronics",
            "subcategory": "Laptop",
            "price": 58999,
            "qty": 8
        },
        {
            "id": 4,
            "name": "HP Pavilion x360",
            "category": "Electronics",
            "subcategory": "Laptop",
            "price": 67999,
            "qty": 6
        },
        {
            "id": 5,
            "name": "Sony Bravia 43\" TV",
            "category": "Electronics",
            "subcategory": "Television",
            "price": 45999,
            "qty": 5
        },
        {
            "id": 6,
            "name": "Nike Air Max",
            "category": "Fashion",
            "subcategory": "Footwear",
            "price": 8999,
            "qty": 25
        },
        {
            "id": 7,
            "name": "Levi's Men's Jeans",
            "category": "Fashion",
            "subcategory": "Clothing",
            "price": 2999,
            "qty": 30
        },
        {
            "id": 8,
            "name": "Adidas Sports T-Shirt",
            "category": "Fashion",
            "subcategory": "Clothing",
            "price": 1999,
            "qty": 40
        },
        {
            "id": 9,
            "name": "Prestige Gas Stove",
            "category": "Home Appliances",
            "subcategory": "Kitchen",
            "price": 7499,
            "qty": 12
        },
        {
            "id": 10,
            "name": "LG Washing Machine",
            "category": "Home Appliances",
            "subcategory": "Laundry",
            "price": 32999,
            "qty": 4
        },
        {
            "id": 11,
            "name": "Philips Mixer Grinder",
            "category": "Home Appliances",
            "subcategory": "Kitchen",
            "price": 3999,
            "qty": 18
        },
        {
            "id": 12,
            "name": "Wildcraft Backpack",
            "category": "Accessories",
            "subcategory": "Bags",
            "price": 2499,
            "qty": 20
        },
        {
            "id": 13,
            "name": "Fastrack Analog Watch",
            "category": "Accessories",
            "subcategory": "Watches",
            "price": 4599,
            "qty": 14
        },
        {
            "id": 14,
            "name": "Classmate Notebook Pack",
            "category": "Stationery",
            "subcategory": "Notebooks",
            "price": 299,
            "qty": 100
        },
        {
            "id": 15,
            "name": "Camlin Color Pencils",
            "category": "Stationery",
            "subcategory": "Art Supplies",
            "price": 199,
            "qty": 60
        }
    ]

    return (
        <div style={{ textAlign: "center" }} className='p-3'>
            <h1>MAP DEMO 7</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CATEGORY</th>
                        <th>SUBCATEGORY</th>
                        <th>PRICE</th>
                        <th>QTY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return <tr style={{backgroundColor:product.subcategory === "Clothing"
                                ? "green" : product.category === "Electronics" ? "yellow" : ""}}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.subcategory}</td>
                                <td style={{backgroundColor:product.price > 50000 && "blue"}}>{product.price}</td>
                                <td style={{color:product.qty <=5 && "red"}}>{product.qty}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const {register,handleSubmit} = useForm()
    const [userData, setuserData] = useState({})
    const [isSubmited, setisSubmited] = useState(false)

    const submitHandler = (data)=>{
        console.log(data) //{} object
        setuserData(data)
        setisSubmited(true)
    }
  return (
         <div style={{textAlign:"center"}}>
        <h1>FormDemo4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Order No</label>
            <input type="number" {...register("order")}/>
          </div>
          <div></div>
          <div>
            <label>Category</label>
            <input type='text' {...register("category")}></input>
          </div>
          <div>
            <label>SubCategory</label>
            <input type='text' {...register("subcategory")}></input>
          </div>
          <div>
            <label>Products</label> <br></br>
            Table :<input type='checkbox' value="table" {...register("products")}></input>
            Chair :<input type='checkbox' value="chair" {...register("products")}></input>
            Sofa :<input type='checkbox' value="sofa" {...register("products")}></input>
            Bed :<input type='checkbox' value="bed" {...register("products")}></input>
            Cupboard :<input type='checkbox' value="cupboard" {...register("products")}></input>
          </div>
          <div>
            <label>Order Date Time</label>
            <input type="datetime" {...register("orderdatetime")}/>
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h6>Order No = {userData.order}</h6>
          <h6>Category = {userData.category}</h6>
          <h6>SubCategory = {userData.subcategory}</h6>
          <h6>Products =
          {
              userData.products.map((product)=>{
                return <span> {product} - </span>
              })
          }
          </h6>
          <h6>Order Date Time = {userData.orderdatetime}</h6>
        </div>
          }
        
    </div>
  )
}

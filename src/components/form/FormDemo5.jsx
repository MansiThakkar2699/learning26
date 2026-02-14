import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("error",errors)

    const validationSchema = {
        ageValidator: {
            required: {
                value: true,
                message: "Age is required"
            },
            min: {
                value: 18,
                message: "min age should be 18"
            },
            max: {
                value: 60,
                message: "max age should be 18"
            }
        },
        addressValidator: {
            required: {
                value: true,
                message: "Address is required"
            },
            minLength: {
                value: 5,
                message: "min 5 char is required"
            },
            maxLength: {
                value: 20,
                message: "max 20 char is accepted"
            }
        }
    }

    const submitHandler = (data)=>{
        alert("form submitted")
        console.log(data)
    }
  return (
    <div>
        <h1>FormDemo5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name: </label>
                <input type="text" {...register("name",{required:{value:true,message:"Name is required"}})}/>
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>Age: </label>
                <input type="text" {...register("age",validationSchema.ageValidator)}/>
                {errors.age && errors.age.message}
            </div>
            <div>
                <label>Address: </label>
                <input type="text" {...register("add",validationSchema.addressValidator)}/>
                {errors.add?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}

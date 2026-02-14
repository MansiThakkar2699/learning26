import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("error",errors)

    const validationSchema = {
        fnameValidator: {
            required: {
                value: true,
                message: "First Name is required"
            }
        },
        lnameValidator: {
            required: {
                value: true,
                message: "Last Name is required"
            }
        },
        emailValidator: {
            required: {
                value: true,
                message: "Email is required"
            }
        },
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
        <h1>FormDemo6</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name: </label>
                <input type="text" {...register("fname",validationSchema.fnameValidator)}/>
                {errors.fname && errors.fname.message}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" {...register("lname",validationSchema.lnameValidator)}/>
                {errors.lname && errors.lname.message}
            </div>
            <div>
                <label>Email: </label>
                <input type="text" {...register("email",validationSchema.emailValidator)}/>
                {errors.email && errors.email.message}
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

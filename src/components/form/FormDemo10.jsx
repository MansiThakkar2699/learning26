import React from 'react'
import { useForm } from "react-hook-form";

export const FormDemo10 = () => {
    const {register,handleSubmit,formState: { errors }} = useForm();

    const validationSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is required*",
            },
            minLength: { 
                value: 3, 
                message: "Minimum 3 characters" 
            },
            maxLength: { 
                value: 10, 
                message: "Maximum 10 characters" 
            },
        },
        ageValidator: {
            required: {
                value: true,
                message: "Age is required*",
            },
            min: { 
                value: 18, 
                message: "Minimum age is 18" 
            },
            max: { 
                value: 60, 
                message: "Maximum age is 60" 
            },
        },
        emailValidator: {
            required: {
                value: true,
                message: "Email is required*",
            },
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
            },
        },
        passwordValidator: {
            required: {
                value: true,
                message: "Password is required*",
            },
            minLength: { 
                value: 6, 
                message: "Min 6 characters" 
            },
            validate:(params)=>{
                return params.includes("@") || "Password must include @"
            }
        },
    };

  const submitHanlder = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div style={{ textAlign: "center"}}>
        <h1>FormDemo10</h1>
        <form onSubmit={handleSubmit(submitHanlder)} style={{ width: "400px" }}>
        
        {/* Name */}
        <div style={{ textAlign: "center" }}>
            <label>Name</label>
            <input type="text" {...register("name",validationSchema.nameValidator)}/>
            <p>{errors.name?.message}</p>
        </div>

        {/* Age */}
        <div>
            <label>Age</label>
            <input type="number" {...register("age", validationSchema.ageValidator)}/>
            <p>{errors.age?.message}</p>
        </div>

        {/* Email */}
        <div>
            <label>Email</label>
            <input type="email" {...register("email",validationSchema.emailValidator)}/>
            <p>{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div>
            <label>Password</label>
            <input type="password" {...register("password", validationSchema.passwordValidator)}/>
            <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

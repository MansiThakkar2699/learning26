import React from 'react'
import { useForm } from "react-hook-form";

export const FormDemo11 = () => {
  const {register,handleSubmit,formState: { errors },watch} = useForm({ mode: "onChange" });
  const password = watch("password", "");

  // Validation checks
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const hasLength = password.length >= 8;

  const validationSchema = {
    confirmPasswordValidation: {
      validate: (params) => {
        return params === password || "Passwords do not match"
      }
    }
  }

  const submitHanlder = (data) => {
    alert("Form Submitted Successfully!");
    console.log(data);
  };

  // helper function for color
  const ruleStyle = (condition) => ({
    color: condition ? "green" : "black",
    fontWeight: condition ? "600" : "400",
  });
  return (
      <div style={{ textAlign: "center" }}>
        <h1>FormDemo11</h1>
        <form onSubmit={handleSubmit(submitHanlder)}>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter Password" {...register("password")}/>
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword", validationSchema.confirmPasswordValidation)}/>
            <p style={ruleStyle(hasUpper)}>✔ Minimum 1 Capital letter</p>
            <p style={ruleStyle(hasLower)}>✔ Minimum 1 Small letter</p>
            <p style={ruleStyle(hasDigit)}>✔ Minimum 1 Digit</p>
            <p style={ruleStyle(hasSpecial)}>✔ Minimum 1 Special character</p>
            <p style={ruleStyle(hasLength)}>✔ Minimum 8 characters</p>
          </div>
          <div>
            <button type="submit" style={{ marginTop: "10px" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
}

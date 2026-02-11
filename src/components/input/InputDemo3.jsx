import React, { useState } from 'react'

export const InputDemo3 = () => {
    const [name, setname] = useState("")
    const [gender, setgender] = useState("")
    const [country, setcountry] = useState("")
    const [state, setstate] = useState("")
    const [statesList, setstatesList] = useState([])
    const [isSubmited, setisSubmited] = useState(false)

    const countryStateMap = {
        india: ["Gujarat", "Maharashtra", "Rajasthan", "Delhi"],
        usa: ["California", "Texas", "New York", "Florida"],
        china: ["Beijing", "Shanghai", "Guangdong"]
    };
    const countryHandler = (e) => {
        const selectedCountry = e.target.value;
        setcountry(selectedCountry);
        setstatesList(countryStateMap[selectedCountry] || []);
        setstate(""); // reset state dropdown
    };
    const submitHandler = ()=>{
        setisSubmited(true)
        console.log({
            name,
            gender,
            country,
            state
        })
    }
    const nameHandler =(event)=>{
        setname(event.target.value)
    }
    const genderHandler = (event)=>{
        setgender(event.target.value)
    }
  return (
        <div style={{textAlign:"center"}}>
            <h1>InputDemo3</h1>
            <div>
                <label>NAME:</label>
                <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            </div>
            <div>
                <label>GENDER</label><br></br>
                MALE : <input type='radio' value="male" name='gender' onChange={(event)=>{genderHandler(event)}}></input>
                <br></br>
                FEMALE : <input type='radio' value="female" name='gender' onChange={(event)=>{genderHandler(event)}}></input>
            </div>
            <div>
                <label>COUNTRY</label>
                <select onChange={countryHandler}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="china">CHINA</option>
                </select>
            </div>
            <div>
                <label>STATE</label>
                <select value={state} onChange={(e) => setstate(e.target.value)} disabled={!statesList.length}>
                    <option value="">Select State</option>
                    {statesList.map((st, index) => (
                        <option key={index} value={st}>
                        {st}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <input type="submit" value="Submit"  onClick={submitHandler}/>
            </div>
            {isSubmited && (
                <div>
                    <h1>Output</h1>
                    <p>Name : {name}</p>
                    <p>Gender : {gender}</p>
                    <p>Country : {country}</p>
                    <p>State : {state}</p>
                </div>
            )}
        </div>
    )
}

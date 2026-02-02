import React from 'react'

export const MapDemo9 = () => {
    var countries = [
  {
    "id": 1,
    "name": "India",
    "flag": "🇮🇳",
    "code": "IN",
    "state": "Gujarat",
    "city": "Ahmedabad"
  },
  {
    "id": 2,
    "name": "India",
    "flag": "🇮🇳",
    "code": "IN",
    "state": "Maharashtra",
    "city": "Mumbai"
  },
  {
    "id": 3,
    "name": "United States",
    "flag": "🇺🇸",
    "code": "US",
    "state": "California",
    "city": "Los Angeles"
  },
  {
    "id": 4,
    "name": "United States",
    "flag": "🇺🇸",
    "code": "US",
    "state": "New York",
    "city": "New York City"
  },
  {
    "id": 5,
    "name": "Australia",
    "flag": "🇦🇺",
    "code": "AU",
    "state": "New South Wales",
    "city": "Sydney"
  },
  {
    "id": 6,
    "name": "Canada",
    "flag": "🇨🇦",
    "code": "CA",
    "state": "Ontario",
    "city": "Toronto"
  }
]

  return (
    <div className='p-3'>
        <h1>MAP DEMO 9</h1>
        <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>FLAG</th>
                        <th>Code</th>
                        <th>STATE</th>
                        <th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.map((country) => {
                            return <tr style={{backgroundColor:country.name == "United States" && "blueviolet"}}>
                                <td>{country.id}</td>
                                <td style={{color:country.name == "India" && "red"}}>{country.name}</td>
                                <td>{country.flag}</td>
                                <td style={{backgroundColor:country.code == "US" && "green"}}>{country.code}</td>
                                <td style={{backgroundColor:country.state == "Gujarat" && "blue"}}>{country.state}</td>
                                <td>{country.city}</td>
                            </tr>
                        })
                    }
                </tbody>
        </table>
    </div>
  )
}

import React from 'react'

export const MapDemo10 = () => {
    var companies = [
  {
    "id": 1,
    "name": "TechNova Solutions",
    "address": "4th Floor, Infinity Tower, Andheri East, Mumbai",
    "email": "info@technova.com",
    "totalEmployee": 250,
    "contactNo": "022-45678901"
  },
  {
    "id": 2,
    "name": "BlueSky Infotech",
    "address": "Near Iscon Mall, SG Highway, Ahmedabad",
    "email": "contact@blueskyinfotech.in",
    "totalEmployee": 120,
    "contactNo": "079-26543210"
  },
  {
    "id": 3,
    "name": "NextGen Software Pvt Ltd",
    "address": "Cyber City, DLF Phase 2, Gurugram",
    "email": "support@nextgensoftware.com",
    "totalEmployee": 400,
    "contactNo": "0124-4987654"
  },
  {
    "id": 4,
    "name": "GreenLeaf Technologies",
    "address": "IT Park, Hinjewadi Phase 1, Pune",
    "email": "hello@greenleaftech.in",
    "totalEmployee": 180,
    "contactNo": "020-66778899"
  },
  {
    "id": 5,
    "name": "CloudSphere Systems",
    "address": "Whitefield Main Road, Bengaluru",
    "email": "sales@cloudsphere.io",
    "totalEmployee": 320,
    "contactNo": "080-55667788"
  },
  {
    "id": 6,
    "name": "Apex Digital Services",
    "address": "Salt Lake Sector V, Kolkata",
    "email": "admin@apexdigital.co.in",
    "totalEmployee": 90,
    "contactNo": "033-44556677"
  }
]

  return (
    <div className='p-3'>
        <h1>MAP DEMO 10</h1>
        <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>EMAIL</th>
                        <th>EMPLOYEE COUNT</th>
                        <th>CONTACT NUMBER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies.map((company) => {
                            return <tr style={{backgroundColor:company.name == "CloudSphere Systems" && "green"}}>
                                <td>{company.id}</td>
                                <td style={{backgroundColor:company.name == "BlueSky Infotech" && "blue"}}>{company.name}</td>
                                <td>{company.address}</td>
                                <td style={{backgroundColor:company.email == "hello@greenleaftech.in" && "pink"}}>{company.email}</td>
                                <td style={{color:company.totalEmployee>200 && "red"}}>{company.totalEmployee}</td>
                                <td>{company.contactNo}</td>
                            </tr>
                        })
                    }
                </tbody>
        </table>
    </div>
  )
}

import React from 'react'
import { TableComponent } from './TableComponent'

export const NetflixCategory = () => {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Category", accessor: "category" },
    { header: "SubCategory", accessor: "subcategory" },
  ];

  const categoryData = [
    { id: 1, category: "abc", subcategory: "xyz" },
    { id: 2, category: "pqr", subcategory: "ghi" },
  ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixCategory</h1>
        <TableComponent columns={columns} data={categoryData}></TableComponent>
    </div>
  )
}

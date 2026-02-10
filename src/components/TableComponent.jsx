import React from 'react'

export const TableComponent = (props) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {props.columns.map((col, index) => (
                        <th key={index}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
               {props.data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {props.columns.map((col, colIndex) => (
                        <td key={colIndex}>{row[col.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

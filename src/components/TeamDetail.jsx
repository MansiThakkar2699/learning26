import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetail = () => {
    const teamName = useParams().name
  return (
    <div>
        <h1>Playing {teamName}...</h1>
    </div>
  )
}

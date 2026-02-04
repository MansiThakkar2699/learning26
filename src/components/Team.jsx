import React from 'react'
import { Link } from 'react-router-dom';

export const Team = () => {
    var teams = [
        {teamId: 1, teamName: "Mumbai Indians (MI)"},
        {teamId: 2, teamName: "Chennai Super Kings (CSK)"},
        {teamId: 3, teamName: "Royal Challengers Bangalore (RCB)"},
        {teamId: 4, teamName: "Kolkata Knight Riders (KKR)"},
        {teamId: 5, teamName: "Sunrisers Hyderabad (SRH)"},
        {teamId: 6, teamName: "Rajasthan Royals (RR)"},
        {teamId: 7, teamName: "Delhi Capitals (DC)"},
        {teamId: 8, teamName: "Punjab Kings (PBKS)"},
        {teamId: 9, teamName: "Gujarat Titans (GT)"},
        {teamId: 10, teamName: "Lucknow Super Giants (LSG)"}];
    return (
        <div style={{textAlign:"center"}}>
            <h1>Team</h1>
            {
                teams.map((team)=>{
                   return <li>
                        <Link to={`/teamdetail/${team.teamName}`}>{team.teamName}</Link>
                    </li>
                })
            }
        </div>
    )
}

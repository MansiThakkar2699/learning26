import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const OmdbDetails = () => {
    const imdbID = useParams().movie
    const [movieData, setMovieData] = useState(null)

    const movieDetail = async()=>{
        try {
            const res = await axios.get(
                `https://www.omdbapi.com/?apikey=4feadf99&i=${imdbID}`
            )
            setMovieData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div style={{minHeight: '100vh',display: 'flex',flexDirection: 'column',justifyContent: 'center',
        alignItems: 'center',textAlign: 'center'}}>
        <h1>OmdbDetails</h1>
        <button onClick={()=>{movieDetail()}}>Get Details</button>

        {movieData && (
            <div style={{ marginTop: '20px' }}>
                <img src={movieData.Poster} alt={movieData.Title} width="200" />

                <h2>{movieData.Title}</h2>
                <p><b>Year:</b> {movieData.Year}</p>
                <p><b>Rated:</b> {movieData.Rated}</p>
                <p><b>Released:</b> {movieData.Released}</p>
                <p><b>Runtime:</b> {movieData.Runtime}</p>
                <p><b>Genre:</b> {movieData.Genre}</p>
                <p><b>Director:</b> {movieData.Director}</p>
                <p><b>Writer:</b> {movieData.Writer}</p>
                <p><b>Actors:</b> {movieData.Actors}</p>
                <p><b>Plot:</b> {movieData.Plot}</p>
                <p><b>Language:</b> {movieData.Language}</p>
                <p><b>Country:</b> {movieData.Country}</p>
                <p><b>Awards:</b> {movieData.Awards}</p>
                
                <h3>Ratings</h3>
                <ul style={{listStylePosition:"inside",padding:0,margin:0}}>
                    {movieData.Ratings.map((rating, index) => (
                    <li key={index} style={{margin: "5px 0", padding:0}}>
                        {rating.Source} : {rating.Value}
                    </li>
                    ))}
                </ul>
                <p><b>Metascore:</b> {movieData.Metascore}</p>
                <p><b>IMDB Rating:</b> ⭐ {movieData.imdbRating}</p>
                <p><b>IMDB Votes:</b> {movieData.imdbVotes}</p>
                <p><b>Type:</b> {movieData.Type}</p>
                <p><b>DVD:</b> {movieData.DVD}</p>
                <p><b>BoxOffice:</b> {movieData.BoxOffice}</p>
                <p><b>Production:</b> {movieData.Production}</p>
                <p><b>Website:</b> {movieData.Website}</p>
                <p><b>Response:</b> {movieData.Response}</p>
            </div>
        )}
    </div>
  )
}

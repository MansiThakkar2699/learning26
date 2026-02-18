import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const OmdbSearch = () => {
    const [movies, setmovies] = useState([])
    const [searchParam, setsearchParam] = useState("")
    const nameHandler = (event) => {
        setsearchParam(event.target.value)
    }
    const searchMovie = async()=>{

        //const res = await axios.get("https://www.omdbapi.com/?apikey=9d57be0b&s=Avatar")
        const res = await axios.get(`https://www.omdbapi.com/?apikey=4feadf99&s=${searchParam}`)
        console.log(res) //axios object
        console.log(res.data)//api response..
        setmovies(res.data.Search)

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>OMDB SEARCG</h1>
        <div>
            <label>Movie Name</label>
            <input type="text" onChange={(event)=>{nameHandler(event)}}/>
            <button onClick={()=>{searchMovie()}}>SEARCH</button>
        </div>
        {/* Movie Grid */}
        <div className="row">
            {movies.map((movie) => (
            <div className="col-md-4 mb-4" key={movie.imdbID}>
                <div className="card h-100">
                    <img
                        src={movie.Poster}
                        className="card-img-top"
                        style={{ height: "350px", objectFit: "cover" }}
                        alt={movie.Title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text">
                            <strong>Year:</strong> {movie.Year}
                        </p>
                        <p className="card-text">
                            <strong>IMDB ID:</strong> {movie.imdbID}
                        </p>
                        <button>
                            <Link to={`/omdbdetails/${movie.imdbID}`}>Details</Link>
                        </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

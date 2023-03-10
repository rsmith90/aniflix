import React, { useState, useEffect } from 'react'
import axios from '../features/axios';
import requests from '../features/Requests.js';
import "../styles/Banner.css";


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTopRated)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);
    
console.log(movie)

    function truncate(string, n) {
        return string?.length > n? string.substr(0, n - 1) + '...' : string;
    }

  return (
    <header 
        className='banner' 
        style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center, center",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
    >
        <div className='banner_contents'>
            <div className='banner_contents_box'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </div>

        <div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner
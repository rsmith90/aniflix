import React, { useEffect, useState } from 'react'
import axios from '../features/axios';
import "../styles/Row.css";

function Row({ title, fetchURL, isLargeRow = false, tooltip }) {
const [movies, setMovies] = useState([]);
const [isHovering, setIsHovering] = useState(false)

const base_url = "https://image.tmdb.org/t/p/original/"

useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
        return request;
 }
 
    fetchData();
}, [fetchURL]);

console.log(movies)

  return (
  <div className='row'>
    <h2>{title}</h2>


    <div className='row_posters'>
        {movies.map(
            (movie) => 
                ((isLargeRow && movie.poster_path) ||
                 (!isLargeRow && movie.poster_path)) && (
                    <div>
                        <img 
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path 
                            ||
                            !isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name ? movie.name : movie.title}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        />
                        {isHovering && <div className='tooltip'>{movie.name ? movie.name : movie.title}</div>}
                    </div>
                    )
                )}
    </div>
  </div>
  )
}

export default Row
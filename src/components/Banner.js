import React, { useEffect, useState } from "react"; 
import axios from "../axios"; 
import requests from "../requests"; 
import "./Banner.css"; 
 
function Banner() { 
  const [movie, setMovie] = useState([]); 
 
  useEffect(() => { 
    async function fetchData() { 
      const req = await axios.get(requests.fetchNetflixOriginals); 
      setMovie( 
        req.data.results[Math.floor(Math.random() * req.data.results.length)] 
      ); 
    } 
    fetchData(); 
  }, []); 
 
  return ( 
    <header 
      className="banner" 
      style={{ 
        backgroundSize: "cover", 
        backgroundImage: 
`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
        backgroundPosition: "center center", 
      }}> 
      <div className="banner_contents"> 
        <h1 className="banner_title">{movie?.title || movie?.name}</h1> 
        <button className="banner_button">Play</button> 
        <button className="banner_button">My List</button> 
        <p className="banner_desc">{movie?.overview}</p> 
      </div> 
 
      <div className="banner_fadeBottom"></div> 
    </header> 
  ); 
} 
 
export default Banner;
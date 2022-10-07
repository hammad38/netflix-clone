import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./request";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request
    }
    fetchData();
  }, []);

  console.log(movies);

  return(
      <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
      >
        <div className="banner-contents">
            <h1>{movies?.title || movies?.name || movies?.original_name} </h1>
        </div>
      </header>
      )
}

export default Banner;

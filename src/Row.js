import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //every time the row loads this piece of code will runs
  //if [], run once when the row loads and don't run it again

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {/*  this is for posters   */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

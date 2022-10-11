import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //     // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {/*  this is for posters   */}

        {movies.map((movie) => {
          const imageUrl = `${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`;

          return (
            <img
              key={movie.id}
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
              src={
                imageUrl === "https://image.tmdb.org/t/p/original/null"
                  ? "https://image.tmdb.org/t/p/original//kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
                  : imageUrl
              }
              alt={movie.original_title}
            />
          );
        })}
      </div>
      <YouTube videoId="XtMThy8QKqU" opts={opts} />
    </div>
  );
}

export default Row;

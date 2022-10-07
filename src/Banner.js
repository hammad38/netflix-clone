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

  console.log(movies)

  return <header></header>;
}

export default Banner;

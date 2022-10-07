import React, { useEffect, useState } from "react";
import axios from "./axios";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  //every time the row loads this piece of code will runs
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    //if [], run once when the row loads and don't run it again
  }, [fetchURL]);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;

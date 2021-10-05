import React, { useState, useEffect } from "react";
import requests from "../API/requests";
import Categories from "./categories";
import "../css/banner.css";
function Banner({ movieCategory, setMovieCategorie, setCategoryTitle }) {
  const baseURL = "https://api.themoviedb.org/3";
  const imgSourceURL = "https://image.tmdb.org/t/p/original";
  const movieInfoURL = "https://www.themoviedb.org/movie/";

  const [movie, setMovie] = useState([]);
  const handleInfo = () => {
    window.location.href = movieInfoURL + movie.id;
  };

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(baseURL + requests.fetchTrending);
      const data = await request.json();
      setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      return request;
    }
    fetchData();
  }, []);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__content">
          <h1 className="banner__title">{movie?.title}</h1>
          <p>{movie?.overview}</p>

          <button onClick={handleInfo} className="more">
            About movie
          </button>
        </div>
        <div className="banner__fade"></div>
      </header>
      <Categories
        setMovieCategorie={setMovieCategorie}
        setCategoryTitle={setCategoryTitle}
        movieCategory={movieCategory}
        baseURL={baseURL}
      />
    </>
  );
}

export default Banner;

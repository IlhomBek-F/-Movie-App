import React, { useState, useEffect } from "react";
import requests from "../API/requests";
import MovieRow from "./movieRow";

import "../css/categories.css";

function Categories({ baseURL }) {
  const [movieCategory, setMovieCategorie] = useState([]);

  const [value, setValue] = useState("");

  const searchURL =
    "https://api.themoviedb.org/3/search/movie?&api_key=ea06223202fdd977cc314b750969e6f7&query=";
  const handleURL = async (ctr) => {
    const base = await fetch(baseURL + ctr);

    const response = await base.json();

    setMovieCategorie(response.results);
  };

  const movieDefault = async () => {
    const req = await fetch(baseURL + requests.fetchTopRated);

    const res = await req.json();

    setMovieCategorie(res.results);
  };
  useEffect(() => {
    movieDefault();
  }, []);
  const handleCategories = (e) => {
    switch (e.target.id) {
      case "rated":
        handleURL(requests.fetchTopRated);
        e.target.className = "active";
        break;
      case "action":
        handleURL(requests.fetchActionMovies);
        break;
      case "trending":
        handleURL(requests.fetchTrending);
        break;
      case "horror":
        handleURL(requests.fetchHorrorMovies);
        break;
      case "romance":
        handleURL(requests.fetchRomanceMovies);
        break;
      case "documentary":
        handleURL(requests.fetchDocumentaries);
        break;
      default:
        return handleURL(requests.fetchNetflixOriginals);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const req = await fetch(searchURL + value);

    const res = await req.json();
    if (res.total_results === 0) {
      alert("No such a movie");
      setValue("");
    } else {
      console.log(res);
      setMovieCategorie(res.results);
      setValue("");
    }
  };
  return (
    <div className="categories">
      <div className="container">
        <div className="content">
          <h1>Categories</h1>
          <ul>
            <li id="rated" onClick={handleCategories}>
              Top Rated
            </li>
            <li id="action" onClick={handleCategories}>
              Action
            </li>
            <li id="trending" onClick={handleCategories}>
              Trending
            </li>
            <li id="horror" onClick={handleCategories}>
              Horror
            </li>
            <li id="romance" onClick={handleCategories}>
              Romance
            </li>
            <li id="documentary" onClick={handleCategories}>
              Documentary
            </li>
          </ul>
          <div className="search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="search movie"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
          </div>
        </div>

        <div className="row">
          {movieCategory?.map((movie) => {
            return <MovieRow item={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;

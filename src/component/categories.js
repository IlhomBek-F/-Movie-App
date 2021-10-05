import React, { useState, useEffect } from "react";
import requests from "../API/requests";
import MovieRow from "./movieRow";
import "../css/categories.css";
import { Link } from "react-router-dom";

function Categories({
  baseURL,
  movieCategory,
  setMovieCategorie,
  setCategoryTitle,
}) {
  const [value, setValue] = useState("");

  const searchURL =
    "https://api.themoviedb.org/3/search/movie?&api_key=ea06223202fdd977cc314b750969e6f7&query=";

  const movieDefault = async () => {
    const req = await fetch(baseURL + requests.fetchTopRated);

    const res = await req.json();

    setMovieCategorie(res.results);
  };
  useEffect(() => {
    movieDefault();
  }, []);

  const handleURL = async (ctr) => {
    const base = await fetch(baseURL + ctr);

    const response = await base.json();

    setMovieCategorie(response.results);

    console.log(movieCategory);
  };
  const handleCategories = (e) => {
    switch (e.target.id) {
      case "rated":
        handleURL(requests.fetchTopRated);
        setCategoryTitle("Rated");
        e.target.className = "active";
        break;
      case "action":
        handleURL(requests.fetchActionMovies);
        setCategoryTitle("Action");

        break;
      case "trending":
        handleURL(requests.fetchTrending);
        setCategoryTitle("Trending");
        break;
      case "horror":
        handleURL(requests.fetchHorrorMovies);
        setCategoryTitle("Horror");

        break;
      case "romance":
        handleURL(requests.fetchRomanceMovies);
        setCategoryTitle("Romance");

        break;
      case "documentary":
        handleURL(requests.fetchDocumentaries);
        setCategoryTitle("Documentary");

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
            <Link className="link" to="card:card" onClick={handleCategories}>
              <li id="rated">Top Rated</li>
            </Link>
            <Link className="link" to="card:card" onClick={handleCategories}>
              <li id="action">Action</li>
            </Link>

            <Link className="link" to="card:card" onClick={handleCategories}>
              <li id="trending">Trending</li>
            </Link>

            <Link className="link" to="card:card">
              <li id="horror" onClick={handleCategories}>
                Horror
              </li>
            </Link>

            <Link className="link" to="card:card">
              <li id="romance" onClick={handleCategories}>
                Romance
              </li>
            </Link>
            <Link className="link" to="card:card" onClick={handleCategories}>
              <li id="documentary">Documentary</li>
            </Link>
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

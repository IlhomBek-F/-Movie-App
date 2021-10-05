import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import requests from "../API/requests";
import { Link } from "react-router-dom";
import NavbarCategories from "./NavbarCategories";
import "../css/navbarInfo.css";
function NavbarInfo({ movieCategory, setMovieCategorie, setCategoryTitle }) {
  const [show, handleShow] = useState(false);

  const [value, setValue] = useState("");

  const baseURL = "https://api.themoviedb.org/3";

  const searchURL =
    "https://api.themoviedb.org/3/search/movie?&api_key=ea06223202fdd977cc314b750969e6f7&query=";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
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
        e.target.className = "active";
        setCategoryTitle("Rated");
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
      setMovieCategorie(res.results);
      setCategoryTitle(value);
      setValue("");
    }
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="navbar">
        <Link to="/home">
          <img src="https://elementor.dostguru.com/cms/animex/wp-content/uploads/2020/12/logo.png" />
        </Link>
        <div className="navbar__ul">
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
        </div>
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
    </div>
  );
}

export default NavbarInfo;

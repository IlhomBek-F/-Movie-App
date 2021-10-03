import React from "react";
import "../css/row.css";
function MovieRow({ item }) {
  const { backdrop_path } = item;
  const imgSourceURL = "https://image.tmdb.org/t/p/original";
  const movieInfoURL = "https://www.themoviedb.org/movie/";
  const moreInfo = () => {
    window.location.href = movieInfoURL + item.id;
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="movie__container">
      {item.backdrop_path !== null ? (
        <div className="movie">
          <div
            classname="movie__image"
            style={{
              height: "55%",
              width: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url("${imgSourceURL}${item.backdrop_path}")`,
            }}
          ></div>
          <div className="movie__info">
            <p className="title">{item.title}</p>
            <div className="movie__text">
              <p>{truncate(item.overview, 190)}</p>
            </div>
            <button className="more__btn" onClick={moreInfo}>
              More....
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MovieRow;

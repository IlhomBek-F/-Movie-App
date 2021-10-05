import React from "react";
import "../css/infoCard.css";
function InfoCard({ item }) {
  const imgSourceURL = "https://image.tmdb.org/t/p/original";
  const movieInfoURL = "https://www.themoviedb.org/movie/";

  const handleInfo = () => {
    window.location.href = movieInfoURL + item.id;
  };
  return (
    <div className="info__card">
      {item.backdrop_path !== null ? (
        <>
          <div className="info__img">
            <img src={`${imgSourceURL}${item.backdrop_path}`} />
          </div>
          <div className="info__info">
            <h1>{item.title}</h1>
            <div className="info__overview">
              <p>{item.overview}</p>
            </div>
            <button className="more__btn" onClick={handleInfo}>
              More....
            </button>
          </div>
        </>
      ) : (
        " "
      )}
    </div>
  );
}

export default InfoCard;

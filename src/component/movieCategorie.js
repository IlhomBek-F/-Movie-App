import React from "react";
import InfoCard from "../component/infoCard";
import "../css/navbarInfo.css";
function NovieCard({ movieCategory, categoryTitle }) {
  return (
    <div>
      <div className="c__title">
        <h1>{categoryTitle} movies</h1>
      </div>
      {movieCategory.map((item) => {
        return <InfoCard item={item} />;
      })}
    </div>
  );
}

export default NovieCard;

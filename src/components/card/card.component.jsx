import React from "react";
import "./card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <p key={props.key}>{props.movie.title}</p>
      <img
        src={`http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}
        alt="Movie Poster"
      />
    </div>
  );
};

export default Card;

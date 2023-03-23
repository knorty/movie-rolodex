import React from "react";
import "./card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container" key={props.key}>
      <img
        className="movie-poster"
        src={`http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}
        alt="Movie Poster"
      />
      <p className="movie-title">{props.movie.title}</p>
      <p className="release-date">{props.movie.release_date}</p>
      <p className={props.movie.vote_average >= 7 ? "green-score" : "red-score"}>{props.movie.vote_average}</p>
    </div>
  );
};

export default Card;

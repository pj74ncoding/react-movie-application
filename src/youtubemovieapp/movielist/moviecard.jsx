import React from "react";
import "./moviecard.css";

const MovieCard = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      className="movie-card"
    >
      <img
        // src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie-details"
        className="movie-poster"
      />

      <div className="movie-info">
        <h3 className="movie-info-heading">{movie.title}</h3>
        <div className="align-center movie-date-rate">
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
        </div>
        <p className="description-of-movie">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;

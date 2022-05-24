import React from "react";
import { IoStar } from "react-icons/io5";
import notFound from "../../assets/fatal.png";
import "./MovieContent.scss";

const MovieContent = ({ movie }) => {
  return (
    <div className="movie__content-row">
      {movie.poster_path ? (
        <img
          className="movie__img"
          alt={movie?.title}
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        />
      ) : (
        <img className="movie__img" src={notFound} alt="not found" />
      )}
      <div className="movie__overview">
        <div className="title">{movie?.title}</div>
        {movie.vote_average ? (
          <div className="rating">
            <IoStar style={{ color: "#ffe800", marginRight: 10 }} />
            {movie?.vote_average}
          </div>
        ) : null}
        {movie.genres ? (
          <div className="genres">
            Genres:{" "}
            {movie.genres.map((item, i) => (
              <div key={i} className="genres__item">
                {item.name}{" "}
              </div>
            ))}
          </div>
        ) : null}
        <div className="overview">{movie?.overview}</div>
        {movie.release_date ? (
          <div className="release">
            <span>Release Data:</span> {movie?.release_date}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieContent;

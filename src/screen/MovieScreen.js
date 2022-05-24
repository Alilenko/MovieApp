import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useMovie from "../app/services/useMovie";
import Nav from "../components/Nav/Nav";
import MovieContent from "../components/MovieContent/MovieContent";

const MovieScreen = () => {
  let params = useParams();
  const { getMovieById } = useMovie();
  const [movie, setMovie] = useState();
  const { moviesData } = useSelector((state) => state.moviesData);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(params.id)
      .then((res) => setMovie(res))
      .catch(() => navigate("*"));
  }, [params]);

  return (
    <div>
      <Nav />
      {movie ? <MovieContent movie={movie} /> : null}
    </div>
  );
};

export default MovieScreen;

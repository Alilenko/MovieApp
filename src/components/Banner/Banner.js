import React, { useEffect, useState } from "react";
import useMovie from "../../app/services/useMovie";
import { useNavigate } from "react-router";
import Button from "../reusable components/Button";
import { moviesFetching, bannerFetched } from "../../app/Slice/MovieSlice";
import "./banner.scss";
import {
  IoCaretForwardCircle,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const Banner = () => {
  const { getTranding, fetchTranding } = useMovie();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesFetching());
    getTranding()
      .then((res) => setMovie(res[Math.floor(Math.random() * res.length - 1)]))
      .then(dispatch(bannerFetched()));
  }, []);

  function transcate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const watchClick = () => {};
  const moreInfoClick = () => {
    navigate(`/movies/${movie?.id}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        height: 650,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="content__row">
          <div className="title">{movie?.name || movie?.title}</div>
          <div className="descr">{transcate(movie?.overview, 150)}</div>
          <div className="buttons">
            <Button
              onClick={watchClick}
              primary={true}
              name="To watch"
              icon={
                <IoCaretForwardCircle
                  style={{ fontSize: 28, paddingRight: 5 }}
                />
              }
            />
            <Button
              onClick={moreInfoClick}
              name="More details"
              icon={
                <IoInformationCircleOutline
                  style={{ fontSize: 28, paddingRight: 5 }}
                />
              }
            />
          </div>
        </div>
      </div>
      <div className="fade__bottom"></div>
    </div>
  );
};

export default Banner;

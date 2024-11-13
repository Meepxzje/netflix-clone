import "./Player.css";

import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2E2MmMzMjE3MzBkM2Y0NmI4MWZhMTJlZmQ4OTZhZiIsIm5iZiI6MTczMTMxNTkwMi4wMTUxNjMsInN1YiI6IjY3MzFjN2Q1YmMzZmY3YjRkMWJlZTZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYI5FdfB4P3CY6AV4ggOItP1Mqk4OAuhWpRTldoZoow",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="back_arrow_icon"
        onClick={() => { navigate("/"); }}
      />

      <iframe
        src={`https://youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder={0}
        allowFullScreen
        height="90%"
        width="90%"
      ></iframe>

      <div className="player-info">
        <p>Pusblished Date: {apiData.published_at.slice(0,10)}</p>
        <p>Name: {apiData.name}</p>
        <p>Type: {apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;

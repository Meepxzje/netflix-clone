/* eslint-disable react/prop-types */
import "./TitleCards.css";

import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2E2MmMzMjE3MzBkM2Y0NmI4MWZhMTJlZmQ4OTZhZiIsIm5iZiI6MTczMTMxNTkwMi4wMTUxNjMsInN1YiI6IjY3MzFjN2Q1YmMzZmY3YjRkMWJlZTZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYI5FdfB4P3CY6AV4ggOItP1Mqk4OAuhWpRTldoZoow",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    // Fetch dữ liệu từ API
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    // Kiểm tra nếu cardsRef.current tồn tại trước khi thêm sự kiện
    if (cardsRef.current) {
      cardsRef.current.addEventListener("wheel", handleWheel);
    }

    return () => {
      // Kiểm tra nếu cardsRef.current tồn tại trước khi xóa sự kiện
      if (cardsRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cardsRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path}
                alt={card.original_title}
              />
              <p> {card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;

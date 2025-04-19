import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios-config";
import { API_KEY } from "../../utils/constant";
import './tvShows.css';
import Header from "../Header/header";

function Tvshows() {
  const [tvshow, setTvshow] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/trending/tv/week?api_key=${API_KEY}&with_genres=10770`)
      .then((response) => {
        setTvshow(response.data.results);
      });
  }, []);

  return (
    <>
      <Header />
      <h2 className="tvshow-title">Trending TV Shows</h2>
      <div className="tvshow-container">
        {tvshow.map((element) => (
          <div className="tvshow-card" key={element.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
              alt={element.original_name}
            />
            <div className="tvshow-info">
              <h3>{element.original_name}</h3>
              <p>📅 {element.first_air_date}</p>
              <p>⭐ {element.vote_average} | 👁️ {element.vote_count}</p>
              <p>🔥 Popularity: {Math.round(element.popularity)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tvshows;

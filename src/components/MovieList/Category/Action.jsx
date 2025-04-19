import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios-config";
import { API_KEY } from "../../../utils/constant";
import './romantic.css';
import Header from "../../Header/header";

function Action() {
  const [action, setAction] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/discover/movie?api_key=${API_KEY}&with_genres=28`)
      .then((res) => {
         setAction(res.data.results);
      });
  }, []);

  return (
   <>
   <Header/>
    <div className="genre-container">
      <h1 className="section-title">Action Movies</h1>
      <div className="movie-grid">
        {action.map((element, index) => (
          <div className="movie-card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
              alt={element.original_title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h3>{element.original_title}</h3>
              <p>Popularity: {element.popularity.toFixed(1)}</p>
              <p>Release Date: {element.release_date}</p>
              <p>⭐ Rating: {element.vote_average}</p>
              <p>👁️ Views: {element.vote_count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  );
}

export default Action;

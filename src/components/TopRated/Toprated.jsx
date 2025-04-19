import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios-config";
import { API_KEY } from "../../utils/constant";
import { FaStar,FaEye } from "react-icons/fa";

function TopRated() {
   const [toprated, setToprated] = useState([])
   useEffect(() => {
      axiosInstance
         .get(`/movie/top_rated?api_key=${ API_KEY }`)
         .then((response) => {
            setToprated(response.data.results)
         })
   }, [])
   console.log(toprated)
   return (
      <>
         <div className="genre">
            <h1>Top Rated </h1>
         </div>
         <div className="trending-container">
            {toprated.map((element) => (
               <div className="trending-card" key={element.id}>
                  <img
                     src={`https://image.tmdb.org/t/p/w500${ element.backdrop_path }`}
                     alt={element.title || element.name}
                  />
                  <h2>{element.title || element.name}</h2>
                  <p><FaStar color="#f5c518" /> {element.vote_average}</p>
                  <p><FaEye color="#29b6f6" /> {element.vote_count}</p>
               </div>
            ))}
         </div>
      </>
   )
}

export default TopRated;
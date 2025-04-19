import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios-config";
import { API_KEY } from "../../utils/constant";
import { FaStar, FaEye } from "react-icons/fa";
import './newPopular.css'

function NewRelease(){
   const [newRelease,setNewrelease] = useState([])
   useEffect(()=>{
      axiosInstance
      .get(`/movie/now_playing?api_key=${API_KEY}`)
      .then((response)=>{
        setNewrelease(response.data.results)
      })
   },[])

   return(
      <>
      <div className="genre">
          <h1>New Release </h1>
          </div>
            <div className="trending-container">    
              {newRelease.map((element) => (
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
export default NewRelease;
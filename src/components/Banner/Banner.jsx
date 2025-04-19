import './Banner.css'
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios-config";
import { API_KEY, BASE_URL, IMAGE_URL } from "../../utils/constant";
function Banner() {
   const [banner, setBanner] = useState([]);
   const [trailerKey, setTrailerKey] = useState(null)
   const [showTrailer, setTrailer] = useState(false)
   const randomNumber = Math.floor(Math.random() * 20);
   useEffect(() => {
      axiosInstance
         .get(`/trending/all/day?api_key=${ API_KEY }&language=en-US`)
         .then((response) => {
            setBanner(response.data.results[randomNumber]);
         });
   }, []);
  
   
   const fetchTrailer = async () => {
      const mediaType = banner.media_type || 'movie'
      const response = await axiosInstance.get(`/${ mediaType }/${ banner.id }/videos?api_key=${ API_KEY }&language=en-US`)
     
      const trailer = response.data.results.find(
         (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      if (trailer) {
         setTrailerKey(trailer.key);
         setTrailer(true);
      } else {
         alert("Trailer not available");
      }
   }

   console.log(banner)
   return (
      <>
         <div className="FullContent">
            <img src={`https://image.tmdb.org/t/p/w1280${ banner.backdrop_path }`} alt="" />
            <div className="review">
               <h1>{banner.title || banner.name}</h1>
               <p>{banner.overview}</p>
               <div className="banner-buttons">
                  <button className="btn" onClick={fetchTrailer}>▶ Play</button>
                  <button className="btn">+ My List</button>
               </div>
            </div>
         </div>

         {showTrailer && (
            <div className="modal-overlay">
               <div className="modal-content">
                  <iframe
                     width="100%"
                     height="100%"
                     src={`https://www.youtube.com/embed/${ trailerKey }?autoplay=1&controls=1`}
                     title="YouTube trailer"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  ></iframe>
                  <button className="close-btn" onClick={() => setTrailer(false)}>✖</button>
               </div>
            </div>
         )}


      </>
   );
}

export default Banner;
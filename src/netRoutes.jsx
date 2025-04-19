import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Tvshows from './components/Tvshows/Tvshows';
import Movies from './components/MovieList/movies';
import Newpopular from './Pages/Newpopular';
function Approutes(){
   return(
     <>
     <Router>
     <Routes>
       <Route path='/' element={<App/>} />
       <Route path='/tvshow' element={<Tvshows />} />
       <Route path='/movies' element={<Movies />} />
       <Route path='/newPopular' element={<Newpopular />} />
     </Routes>
     </Router>
     </>
   )
}
export default Approutes;
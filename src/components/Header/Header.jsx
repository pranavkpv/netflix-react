import './header.css'
import {Link} from 'react-router-dom'

const Header=()=>{
   return(
      <ul>
         <li className="logo">Netflix</li>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/tvshow'>TV show</Link></li>
         <li><Link to='/movies'>Movies</Link></li>
         <li><Link to='/newPopular'>New popular</Link></li>
         <li>My list</li>
      </ul>
   )
}

export default Header
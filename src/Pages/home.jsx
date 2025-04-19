import Banner from "../components/Banner/Banner";
import Trending from "../components/Trending/Trending";
import Popular from "../components/popular/Popular";
import TopRated from "../components/TopRated/Toprated";
function Home(){
   return(
      <>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
      </>
   )
}

export default Home;
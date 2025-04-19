import Romantic from "./Category/romantic";
import Action from "./Category/Action";
import Family from "./Category/Family";
import Comedy from "./Category/Comedy";
function Movies(){
   return(
      <>
        <Romantic />
        <Action />
        <Family />
        <Comedy />
      </>
   )
}

export default Movies;
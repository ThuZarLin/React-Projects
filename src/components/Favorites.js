import { useContext } from "react"
import favoritesContext from "../store/favorites-context"
import MeetupList from "./meetups/MeetupList";
const Favorites = () => {
  const favoritesCtx = useContext(favoritesContext);

  let content;
  if(favoritesCtx.totalFavorites === 0){
    content = <p>You got no favorites yet.Start adding some?</p>
  }else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
        <h1>My Favorites</h1>
        {content}
    </section>
  )
}

export default Favorites
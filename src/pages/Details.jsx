import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../style/Details.scss"



function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TMDB_TOKEN;
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/{movie_id}",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          },

        );

        if (!response.ok) {
          throw new Error("Kunne ikke hente filmens detaljer");
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();

  }
);

 



  return (
    <>

     <h1>Details Movie</h1>
      
    </>
  )
}

export default Details
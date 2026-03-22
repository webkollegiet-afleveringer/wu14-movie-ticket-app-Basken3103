import { useEffect, useState } from "react";
import "../style/Home.scss";

function Home() {
  const [comingSoonMovies, setComingSoonMovies] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_TMDB_TOKEN
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  const cinemas = [
    {
      id: 1,
      name: "Viva Cinema",
      distance: "5,2 Kilometers",
      closingTime: "Closed 10.00 PM",
      rating: "4,9",
      image:
        "https://via.placeholder.com/80x80/ffffff/cc0000?text=VIVA",
    },
      {
      id: 2,
      name: "EbonyLife Cinema",
      distance: "6,5 Kilometers",
      closingTime: "Closed 09.00 PM",
      rating: "5,0",
      image:
        "https://via.placeholder.com/80x80/111111/ffffff?text=EL",
    },
  ];

  return (
    <>

     <h1>Home Page</h1>
      
    </>
  )
}

export default Home
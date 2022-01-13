import SmallCardMovie from "./SmallCardMovie";
import axios from "../pages/api/axios";
import { useEffect, useState } from "react";
function GenreArea({ fetchUrl, Title }) {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    const MovieDataReceive = async () => {
      const MovieData = await axios.get(fetchUrl);
      setMovies(MovieData.data.results);
      return MovieData;
    };
    MovieDataReceive();
  }, []);
  

  return (
    <div>
      <span className="text-white font-semibold text-xl">{Title}</span>
      <div
        className="w-full overflow-x-scroll flex items-center flex-shrink-0 my-10  no-scrollbar "
        style={{ height: "25vh" }}
      >
        {Movies?.map((Movie) => {
          return <SmallCardMovie Movie={Movie} key={Movie.id} />;
        })}
      </div>
    </div>
  );
}

export default GenreArea;

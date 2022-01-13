import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getMovieData } from "../StateSlices/MovieSlice";
function SmallCardMovie({ Movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const dispatch = useDispatch();
  const pushToDetail = () => {
    dispatch(getMovieData(Movie));
    router.push("/detail");
  };
  return (
    <div
      className="flex items-center justify-center h-full w-full"
      onClick={pushToDetail}
    >
      <div
        className={`w-64 cursor-pointer h-4/5  rounded-2xl shadow-lg ml-4 hover:transform transition duration-500 hover:scale-105 hover:border-4 border-blue-100 flex items-center justify-center`}
      >
        <Image
          src={`${base_url}${Movie.backdrop_path}`}
          className="rounded-2xl"
          width={300}
          height={210}
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default SmallCardMovie;

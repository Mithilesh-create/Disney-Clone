import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import { BellIcon, PlayIcon, PlusIcon } from "@heroicons/react/outline";
import { MovieSliceData } from "../StateSlices/MovieSlice";
import { authSliceData } from "../StateSlices/authSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Middleware from "../components/Middleware";
function details() {
  const MovieDetails = useSelector(MovieSliceData);

  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <Middleware>
      <Wrapper>
        <Layout
          className=" bg-no-repeat  bg-cover md:bg-left bg-center"
          style={{
            backgroundImage: `url(${base_url}${MovieDetails?.MovieArr.backdrop_path})`,
          }}
        >
          <div
            className=" z-10 absolute top-0 bottom-0 right-0 left-0 px-10 flex flex-col justify-start"
            style={{
              background: "rgba(0, 0, 0,0.5)",
              boxShadow: "inset 0 0 10vw 2.5vw black",
            }}
          >
            <Header />
            <div
              className="w-5/6 md:w-1/2 absolute top-0 left-0 border-0 flex flex-col items-center justify-center ml-4"
              style={{
                height: "100%",
                zIndex: -4,
              }}
            >
              {/* {MovieDetails?.MovieArr.title} */}
              <div className="h-1/2 flex flex-col  justify-evenly">
                <span className="text-white text-6xl">
                  {MovieDetails?.MovieArr.title ||
                    MovieDetails?.MovieArr.original_name}
                </span>
                <div className="w-full h-16 flex items-center justify-between text-2xl transform transition duration-500 ">
                  <button className="w-1/3 h-full  rounded-2xl hover:bg-black text-black border-2 border-white hover:text-white bg-white flex items-center justify-evenly">
                    Play <PlayIcon width={30} height={30} />
                  </button>
                  <button className="w-1/3 h-full  rounded-2xl hover:bg-white text-white border-2 border-white hover:text-black bg-transparent ">
                    Trailer
                  </button>
                  <button className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-white text-white border-2 border-white hover:text-black bg-black">
                    <BellIcon width={30} height={30} />
                  </button>
                  <button className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-white text-white border-2 border-white hover:text-black bg-black">
                    <PlusIcon width={30} height={30} />
                  </button>
                </div>
                <span className="text-white">
                  {MovieDetails?.MovieArr.overview}
                </span>
              </div>
            </div>
          </div>
        </Layout>
      </Wrapper>
    </Middleware>
  );
}

export default details;

import Image from "next/image";
import Img from "../assets/DisneyLogo.png";
import Profilelogo from "./Profilelogo";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  PlusIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import LoginBtn from "./LoginBtn";

function Header({ login }) {
  return (
    <div className="h-32 w-full grid grid-cols-2 sm:grid-cols-5 uppercase">
      <div className=" lg:col-span-1 col-span-3 flex items-center">
        <Image
          src={Img}
          width={150}
          height={"100%"}
          className="w-14 h-full object-contain cursor-pointer"
        />
      </div>
      {!login && (
        <div className="lg:flex pt-4 items-center justify-evenly text-xl  text-white hidden col-span-3">
          <div className="cursor-pointer flex items-center justify-center">
            <HomeIcon width={25} height={25} className="h-full m-2" />
            <span>Home</span>
          </div>
          <div className="cursor-pointer flex items-center justify-center">
            <SearchIcon width={25} height={25} className="h-full m-2" />
            <span>Search</span>
          </div>
          <div className="cursor-pointer flex items-center justify-center">
            <PlusIcon width={25} height={25} className="h-full m-2" />
            <span>Watchlist</span>
          </div>
          <div className="cursor-pointer flex items-center justify-center">
            <BadgeCheckIcon width={25} height={25} className="h-full m-2" />
            <span>Orignals</span>
          </div>
          <div className="cursor-pointer flex items-center justify-center">
            <CollectionIcon width={25} height={25} className="h-full m-2" />
            <span>Movies</span>
          </div>
        </div>
      )}
      {!login && <Profilelogo />}
      {login && <LoginBtn />}
    </div>
  );
}

export default Header;

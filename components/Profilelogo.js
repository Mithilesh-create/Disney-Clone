import { LogoutIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  authSliceLogo,
  authSliceName,
  getLogout,
} from "../StateSlices/authSlice";
import { auth } from "../firebase/firebase";
function Profilelogo() {
  const [Show, setShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const profilePic = useSelector(authSliceLogo);
  const profileName = useSelector(authSliceName);

  const logOut = async () => {
    auth.signOut();
    dispatch(getLogout());
    router.push("/login");
  };
  return (
    <div
      className="lg:col-span-1 col-span-2 flex items-center justify-end"
      onClick={() => {
        setShow(!Show);
      }}
    >
      <div
        className="w-full md:w-1/2 h-full  flex
                flex-col items-end  justify-center cursor-pointer relative"
      >
        <div
          className="w-16 h-16 bg-cover bg-center rounded-full bg-no-repeat mr-4"
          style={{
            backgroundImage: `url(${profilePic})`,
          }}
        />

        <span className="text-xl font-semibold text-white normal-case">
          {profileName}
        </span>
        {Show && (
          <div
            className="absolute z-10 bg-white w-full h-1/2 -bottom-1/2 rounded-2xl flex items-center justify-evenly"
            onClick={logOut}
          >
            <span className="text-xl font-semibold text-black">Logout</span>
            <LogoutIcon width="30" height="30" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profilelogo;

import { LoginIcon } from "@heroicons/react/outline";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase/firebase";
import { getLogin } from "../StateSlices/authSlice";
function LoginBtn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const LoggedIn = async () => {
    const result = await signInWithPopup(auth, provider);
    // signInWithPopup(auth,provider)
    dispatch(
      getLogin({
        userName: result.user.displayName,
        // profilelogo:
        //   "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        profilelogo: result.user.photoURL,
      })
    );
    router.push("/");
  };

  return (
    <div
      className="col-span-2 lg:col-span-4 flex items-center justify-end"
      onClick={LoggedIn}
    >
      <div
        className="w-3/4 md:w-56 h-1/2 flex
                items-center  justify-evenly cursor-pointer text-white bg-black border-4 rounded-2xl hover:text-black hover:bg-white"
      >
        <span className="text-2xl font-semibold ">Login</span>
        <LoginIcon width="30" height="30" />
      </div>
    </div>
  );
}

export default LoginBtn;

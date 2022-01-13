import Image from "next/image";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import ImgTop from "../assets/Bundell12.png";
import ImgBottom from "../assets/disneyPlusComp.png";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getLogin } from "../StateSlices/authSlice";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
function login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const LoggedIn = async() => {
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
    <Wrapper>
      <Layout className=" bg-no-repeat  bg-cover md:bg-center bg-center bgback">
        <div
          className=" z-10 absolute top-0 bottom-0 right-0 left-0 px-10 flex flex-col items-center justify-start "
          style={{
            background: "rgba(0, 0, 0,0.5)",
            boxShadow: "inset 0 0 10vw 2.5vw black",
          }}
        >
          <Header login />
          <div
            className="w-11/12 md:w-1/2  absolute flex flex-col items-center justify-center ml-4 "
            style={{
              height: "100%",
              zIndex: -4,
            }}
          >
            <Image src={ImgTop} />
            <div
              className="bg-blue-600 w-full h-24 rounded-2xl uppercase flex items-center justify-center text-2xl font-semibold text-white my-8 cursor-pointer hover:bg-blue-500 tracking-widest"
              onClick={LoggedIn}
            >
              Get All There
            </div>
            <span className="text-center text-white my-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less .
            </span>
            <Image className="my-4 brightness-200" src={ImgBottom} />
          </div>
        </div>
      </Layout>
    </Wrapper>
  );
}

export default login;

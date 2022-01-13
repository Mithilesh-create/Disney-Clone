import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  authSliceState,
} from "../StateSlices/authSlice";

function Middleware(props) {
  const authDetails = useSelector(authSliceState);
  const router = useRouter();

  useEffect(() => {
    if (!authDetails) {
      router.push("/login");
    }
  }, [authDetails]);
  return <>{props.children}</>;
}

export default Middleware;

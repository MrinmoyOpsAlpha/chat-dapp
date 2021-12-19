import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative ">
      <h1>I'm login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 pr-10 w-full items-end justify-end">
        <button
          onClick={() => authenticate()}
          className="bg-gradient-to-r from-yellow-700 to-orange-300 rounded-lg p-5 mt-20 font-bold animate-pulse  "
        >
          Login with METAMASK
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://static.wixstatic.com/media/ea26fd_64f5f234cbf3484799aa98b276b719ff~mv2.jpg/v1/fill/w_1899,h_1090,al_c,q_90,usm_0.66_1.00_0.01/ea26fd_64f5f234cbf3484799aa98b276b719ff~mv2.webp"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;

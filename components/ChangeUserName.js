import React from "react";
import { useMoralis } from "react-moralis";
import PopUp from "./PopUp";

function ChangeUserName() {

  let trigger=false;
  const { setUserData, isUserUpdating, userError, user,logout } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username(current:${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username: username,
    });
  };

  return (
    <div className="z-50">
      <div className="text-sm font-bold text-gray-50 bg-gradient-to-r from-indigo-800 to-blue-500 p-3 rounded-full absolute top-5 left-5 hover:animate-pulse hover:text-black ">
        <button disabled={isUserUpdating} onClick={() => setUsername()}>
          Change Username
        </button>
      </div>
      <div className='text-sm font-bold text-gray-50 bg-gradient-to-l from-indigo-800 to-blue-500 p-3 pl-10  pr-10 rounded-full absolute top-5 right-8 hover:animate-pulse hover:text-black '>
            <button  disabled={isUserUpdating} onClick={() => logout()}>
                Logout
            </button>
        </div>
    </div>
  );
}

export default ChangeUserName;

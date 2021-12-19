import React from 'react';
import Image from 'next/image';
import Avatar from './Avatar';
import { useMoralis } from "react-moralis";
import ChangeUserName from './ChangeUserName';

function Header() {

    const {user}=useMoralis();

    return (
        <div className='sticky top-0 p-5 text-red-100 text-center z-50'>
            <div className=' bg-gradient-to-b from-black to-indigo-900 border-b-4 pt-2 border-yellow-500 w-2/3 mx-auto rounded-lg'>
                <div className='relative h-40 w-40 mt-2 mx-auto border-8 border-green-600 rounded-full '>
                    <Avatar logoutOnPress/>
                </div>
                <h1 className='text-3xl '>Welcome to the METAVERSE🚀</h1>
                <h2 className='text-5xl font-serif truncate text-green-400' >{user.getUsername()}</h2>                
                <ChangeUserName/>
            </div>
        </div>
    )
}

export default Header

import React from 'react';
import {useMoralis} from "react-moralis";
import Image from 'next/image';

function Avatar({username,logoutOnPress}) {

    const{user,logout}=useMoralis();

    return (
            <Image 
                  className="rounded-full " 
                  layout="fill"
                  objectFit="cover"
                  src="https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
    );
}

export default Avatar

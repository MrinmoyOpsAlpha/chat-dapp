import React from 'react';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useMoralis } from 'react-moralis';

function SendMessage({endOfMessageRef}) {

    const{user,Moralis}=useMoralis();
    const[message,setMessage]=useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if(!message) return;

        const Messages=Moralis.Object.extend("Messages");
        const messages=new Messages();

        messages
            .save({
                message:message,
                username:user.getUsername(),
                ethAddress:user.get('ethAddress'),
            })
            .then((message) => {
                console.log(message.message);
            },
            (error) =>{
                console.log(error.message)
            })

            endOfMessageRef.current.scrollIntoView({behavior:"smooth"});

        setMessage("");
    };

    return (
        <form className='flex  fixed bottom-10 bg-black opacity-80 w-11/12 px-5 py-3 max-w-2xl shadow-xl rounded-full border-white border-2'>
            <input className='flex-grow outline-none bg-transparent pr-5 text-white ' 
                type="text" 
                value={message}
                onChange={(e) =>setMessage(e.target.value)}
                placeholder={"Type your message..."}                
            />
            <button 
                className='font-bold text-pink-600 '
                type='submit'
                onClick={sendMessage}
            >
            <SendIcon/>
            </button>
        </form>
    )
}

export default SendMessage

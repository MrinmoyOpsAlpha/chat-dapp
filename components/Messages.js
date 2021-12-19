import React, { useReducer, useRef } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import Message from './Message';
import SendMessage from './SendMessage';

const MINS_DURATION=1;

function Messages() {

    const {user,getUsername}=useMoralis();
    const endOfMessageRef=useRef(null);

    const {data,loading,error}=useMoralisQuery('Messages',
    (query) =>
        query
        .ascending('createdAt')
        .greaterThan(
            'createdAt',new Date(Date.now()-1000 * 60 *MINS_DURATION)
        ),
        [],
        {
            live:true,
        }
    );

    return (
        <div className='pb-56'>
            
            <div className='space-y-5 p-4 break-words'> 
                {data.map(message =>(
                    <Message key={message.id} message={message}/>
                ))}
            </div>

            <div className='flex justify-center'>
                <SendMessage endOfMessageRef={endOfMessageRef}/>
            </div>

            <div ref={endOfMessageRef} className='text-center text-gray-200 mt-5'>
                <p>You are uptodate {user.getUsername()}!🎉</p>
            </div>
        </div>
    )
}

export default Messages

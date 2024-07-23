import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
    const message = useSelector((store) => store.chat.message);
    const dispatch = useDispatch();
    useEffect(()=>{
       const timer = setInterval(()=>{
            dispatch(setMessage({name:generateRandomName(), message:generateRandomMessage(16)}));
        },1000)

        return(()=>{
            clearInterval(timer)
        })
        
    },[])

  return (
    <div>
      <div className='px-4 py-1'>
        {
            message.map((item ,ind)=>{
                return(
                    <ChatMessage key={ind} item={item}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default LiveChat

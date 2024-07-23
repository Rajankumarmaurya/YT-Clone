import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../constant/Youtube';


const VideoCart = ({ item }) => {
    const [ytIcon, setYtIcon] = useState("")
    const getYoutubeChannelName = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
            console.log(res);
            setYtIcon(res.data.items[0].snippet.thumbnails.high.url)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getYoutubeChannelName()
    }, [])
    return (
        <div className='w-94 cursor-pointer my-2'>
            <img className=' w-full rounded-xl' src={item.snippet.thumbnails.medium.url} alt="youtube Video" />
            <div className='flex mt-2'>
                <img className='img' src={ytIcon} alt="" />
                <div className='ml-2'>
                    <h1 className='font-bold'>{item.snippet.title} </h1>
                    <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCart

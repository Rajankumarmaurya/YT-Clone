import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY, YOUTUBE_VIDEO_API } from "../constant/Youtube";
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeVideo } from '../utils/appSlice';




const VideoContainer = () => {
  // const [video, setVideo] = useState([]);
  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const fetchYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      // console.log(res?.data?.items);
      setVideo(res?.data?.items)
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  }

  const fetchVideoByCategory= async()=>{
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
      dispatch(setHomeVideo(res?.data?.items))

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchYoutubeVideo()
    fetchVideoByCategory()
  }, [category])

  return (
    <div className='mt-3 grid grid-cols-3 gap-3'>
      {
        video.map((item) => {
          return (
            <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`} key={typeof item.id === 'object' ? item.id.videoId : video.id } >
                            <VideoCart item={item} />
                        </Link>
          )
        })
      }

    </div>
  )
}

export default VideoContainer

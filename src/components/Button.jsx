import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/appSlice';

const ButtonList = ["All","Trending", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs",  "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "New to you", "Computer Programming", "Netlify", "Coding"]

const Button = () => {
    const [active, setActive] = useState("All");
    const dispatch = useDispatch()

    const videoByTag = (tag) => {
        if (active !== tag) {
            dispatch(setCategory(tag));
            setActive(tag);
        }

    }
    return (
        <div className='flex w-full overflow-x-scroll no-scrollbar my-1'>
            {
                ButtonList.map((buttonName, index) => {
                    return (
                        <div key={index}>

                            <button onClick={() => { videoByTag(buttonName) }} className={`${active === buttonName ? "bg-slate-900 text-white" : "bg-gray-200"} w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg`}><span className="whitespace-nowrap">{buttonName}</span></button>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Button

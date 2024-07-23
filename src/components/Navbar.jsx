import React, { useEffect, useState } from 'react'

import { CiSearch, CiVideoOn } from 'react-icons/ci'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoIosNotificationsOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSearchSuggestion, toggleSideBar } from '../utils/appSlice'
import axios from 'axios'
import { SEARCH_SUGGESTIONS_API } from '../constant/Youtube'

const Navbar = () => {
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState(false);
    const dispatch = useDispatch();

    const { searchSuggestion } = useSelector((store) => store.app);
    const searchVideo = () => {
        dispatch(setCategory(input));
        setInput("");
    }

    const toggleHandle = () => {
        dispatch(toggleSideBar());
    }

    const showSuggestion = async () => {
        try {
            const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
            dispatch(setSearchSuggestion(res?.data[1]))
        } catch (error) {

        }
    }
    const openSuggestion = () => {
        setSuggestion(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            showSuggestion();
        }, 200)

        return () => {
            clearTimeout(timer);
        }

    }, [input])
    return (
        <div className='flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white'>
            <div className='w-[96%] py-4 flex  justify-between '>

                <div className='flex items-center cursor-pointer'>
                    <GiHamburgerMenu onClick={toggleHandle} size={'24px'} />
                    <img className='px-3' width={"110px"} src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png" alt="" />
                </div>

                <div className='flex w-[40%] items-center'>
                <div className="flex w-[100%] ">
                        <input value={input} onFocus={openSuggestion} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search" className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none" />
                        <button onClick={searchVideo} className="py-2 border border-gray-400 rounded-r-full px-4"><CiSearch size="24px" /></button>
                    </div>
                </div>
                {
                    (suggestion && searchSuggestion.length !== 0) &&
                    <div className="absolute top-3 z-50 w-[30%] py-5 bg-white shadow-lg mt-12 rounded-lg border border-gray-200">
                        <ul>
                            {
                                searchSuggestion.map((text, idx) => {
                                    return (
                                        <div className="flex items-center px-4 hover:bg-gray-100">
                                            <CiSearch size="24px" />
                                            <li className="px-2 py-1 cursor-pointer text-md font-medium">{text}</li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }

                <div className='flex items-center w-[10%] justify-between'>
                    <IoIosNotificationsOutline className='cursor-pointer' size={"24px"} />
                    <CiVideoOn className='cursor-pointer' size={'24px'} />
                    <img className='img' src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

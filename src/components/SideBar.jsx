import React from 'react'
import { CiHome } from 'react-icons/ci'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { useSelector } from 'react-redux'



const sideBarItems = [
    {
        icon: <CiHome size={'24px'} />,
        title: "Home",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icon: <CiHome size={'24px'} />,
        title: "Home",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icon: <CiHome size={'24px'} />,
        title: "Home",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icon: <CiHome size={'24px'} />,
        title: "Home",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icon: <CiHome size={'24px'} />,
        title: "Home",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icon: <CiHome size={'24px'} />,
        title: "Home",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icon: <CiHome size={'24px'} />,
        title: "Home",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icon: <CiHome size={'24px'} />,
        title: "Home",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
    {
        icon: <CiHome size={'24px'} />,
        title: "Home",
    },
    {
        icon: <SiYoutubeshorts size={'24px'} />,
        title: "Short",
    },
    {
        icon: <MdOutlineSubscriptions size={'24px'} />,
        title: "Subscription",
    },
]

const SideBar = () => {
    const open = useSelector((Store)=>Store.app.open)
    return (
        <div className={`relative left-0 ${open? "w-[15%]": "w-[6%]"} p-5 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden ml-6`}>

            {
                sideBarItems.map((item, index) => {
                    return (
                        <div key={index} className='flex  my-3 '>
                            {item.icon}
                            <p className={`ml-5 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar

import React, {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { LuBadgeCheck, LuClipboardList} from "react-icons/lu";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { GiSettingsKnobs } from "react-icons/gi";
import { toast } from 'react-toastify';



const HomePage = () => {
    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.get("succes") === "true") {
        toast.success('Je bent ingelogd, welkom!');
        }
    }, [location.search]);
  return (
        <>
            <div className="grid grid-cols-2 text-8xl gap-2">
                <Link to='/app/inspecties' className='border-2 border-gray-200  p-6 rounded-2xl text-gray-700 mb-2 mt-4 shadow-lg w-full flex flex-col items-center  hover:border-gray-300 duration-25'>
                    <LuBadgeCheck/>
                    <p className='text-sm'>Toegewezen</p>
                </Link>
                <Link to='/app/oude-inspecties' className='border-2 border-gray-200  p-6 rounded-2xl text-gray-700 mb-2 mt-4 shadow-lg w-full flex flex-col items-center hover:border-gray-300 duration-25'>
                    <LuClipboardList />
                    <p className='text-sm'>Uitgevoerd</p>
                </Link>
                <Link to='/app/kennisbank' className='border-2 border-gray-200  p-6 rounded-2xl text-gray-700 mb-2 shadow-lg w-full flex flex-col items-center hover:border-gray-300 duration-25'>
                    <HiOutlineDocumentSearch />
                    <p className='text-sm'>Kennisbank</p>
                </Link>
                <Link to='/app/settings' className='border-2 border-gray-200  p-6 rounded-2xl text-gray-700 mb-2 shadow-lg w-full flex flex-col items-center hover:border-gray-300 duration-25'>
                    <GiSettingsKnobs />
                    <p className='text-sm'>Instellingen</p>
                </Link>
            </div>
        </>
  )
}

export default HomePage

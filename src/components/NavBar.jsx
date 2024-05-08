import React from 'react'
import { LuBadgeCheck, LuClipboardList} from "react-icons/lu";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { GiSettingsKnobs } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const linkClass = ({isActive}) => isActive ? 'p-3 md:mr-10  text-rec-blue border-[1px] bg-gray-600 bg-opacity-30 rounded-3xl ' : 'p-3 md:mr-10  text-white';

  return (
    <div className="flex justify-around p-1 md:items-center text-4xl md:text-5xl md:m-auto">
        {/* <NavLink to='/checks' className= {({isActive})} => isActive ? '"p-4 md:mr-10  text-white"' : '"p-4 md:mr-10  text-black'><LuBadgeCheck /></NavLink> */}
        <NavLink className={linkClass} to='/checkspage'><LuBadgeCheck/></NavLink>
        <NavLink className={linkClass} to='/pastcheckpage'><LuClipboardList /></NavLink>
        <NavLink className={linkClass} to='/documentation'><HiOutlineDocumentSearch /></NavLink>
        <NavLink className={linkClass} to='/settings'><GiSettingsKnobs /></NavLink>
    </div>
  )
}

export default NavBar

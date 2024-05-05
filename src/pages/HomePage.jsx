import React from 'react'
import {Link} from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";



const HomePage = () => {
  return (
        <>
            <div>
                <h2 className="text-rec-blue text-xl font-semibold font-montserrat">Home</h2>
            </div>
            <div className="p-4 flex mt-4 items-center">
                <GoDotFill className='fa-solid fa-circle text-sm text-rec-blue mr-4'/><Link to='/checkspage'><p> 4 actuele check-ups</p></Link>
            </div>
            <div className="p-4 flex items-center">
            <GoDotFill className='fa-solid fa-circle text-sm text-rec-blue mr-4'/><Link to='/pastcheckpage'><p> Dossiers Inzien</p></Link>
            </div>
            <div className="p-4 flex items-center"> 
            <GoDotFill className='fa-solid fa-circle text-sm text-rec-blue mr-4'/><Link to='/documentation'><p> Kennisbank</p></Link>
            </div>
            <div className="p-4 flex mb-4 items-center"> 
            <GoDotFill className='fa-solid fa-circle text-sm text-rec-blue mr-4'/><Link to='/settings'><p> Instellingen bewerken</p></Link>
            </div>
        </>
  )
}

export default HomePage

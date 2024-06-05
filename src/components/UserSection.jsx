import React, {useState}from 'react'
import { CiBellOn, CiSearch } from "react-icons/ci";
import { CiBellOff } from "react-icons/ci";
import { IoLogInOutline  } from "react-icons/io5";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const UserSection = () => {

    const navigate = useNavigate();

    const [notifications, setNotifications] = useState(localStorage.getItem('melding'));
    
    const handleSound = () => {
        setNotifications(!notifications)
        localStorage.setItem('melding', !notifications)
    }
    
    function handleLogOut () {
        return navigate('/login?succes=true')
    }
    const userName = localStorage.getItem('name')

  return (
    <div>
        <div className="mt-8 border-t-2 flex justify-between p-2">
            <p className="mt-2 p-2">Welkom Mr  <Link to="/app/settings"><span className="text-rec-blue font-medium hover:text-rec-blue-dark">{userName}</span></Link>!</p>
            <div className="flex text-gray-600">
                <button>
                    <Link to="/app/search">
                        <CiSearch className='m-auto text-3xl mr-2 hover:text-gray-400'/>    
                    </Link>
                </button>
                <button onClick={handleSound}>
                    {localStorage.getItem('melding') === 'true'? (
                        <CiBellOn className='m-auto text-3xl mr-2 hover:text-gray-400 '/>
                    ) : (
                        <CiBellOff className='m-auto text-3xl mr-2 hover:text-gray-400'/>
                    )}
                </button>
                <button onClick={handleLogOut} >
                    <IoLogInOutline  className='m-auto text-3xl mr-2 hover:text-gray-400'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default UserSection

import React from 'react';
import { Link } from 'react-router-dom'
import { CiEdit } from "react-icons/ci";

const SettingsPage = () => {
    return (
      <div>
        <h2 className="text-rec-blue text-xl font-semibold">Settings</h2>
        <div className='mb-6 mt-6'>
          <img className='w-40 h-40 m-auto' src='/images/userIcon.png'></img>
            <p className=" text-center italic text-lg">{localStorage.getItem('name')}</p>
        </div>
        <div>
        <p className=" text-center font-semibold text-lg mb-3">Wachtwoord</p>
          <p className='mb-4'>***********</p>
          <p className=" text-center font-semibold text-lg mb-3">Lichte/Donkere Modus</p>
          <p className='mb-4'>{localStorage.getItem('modus')}</p>
          <p className=" text-center font-semibold text-lg mb-3">Two Factor Authenthication</p>
          <p className='mb-4'>{localStorage.getItem('2fa') === 'true' ? <>Aan </> : <>Uit</>}</p>
        </div>
        <Link to= "/app/edit-settings"><CiEdit className='text-4xl m-auto text-rec-blue'/></Link>
      </div>
    )
  }

export default SettingsPage

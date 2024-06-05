import React from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'



const TwoFactorPage = () => {
  const navigate = useNavigate();
  const handleTfa = (e) => {
      e.preventDefault();
      if (localStorage.getItem('tfa-code') === e.target.tfa.value)  {
        navigate('/?succes=true')
        }
      else {
        toast.error('Code komt niet overeen')
      }
  }
  return (
    <>
      <h2 className="text-rec-blue text-xl font-semibold">Two Factor Authenthication</h2>
      <form className="flex flex-col gap-y-5 mt-8 mb-4" onSubmit={handleTfa}>
        <label htmlFor="tfa" className="font-montserrat font-semibold">Uw Code:</label>
        <input type="number" className="border-2  h-10 w-2/3 m-auto rounded-lg" name='tfa' required></input>
        <button type="submit" className="border-[1px]  border-rec-blue h-10 w-2/3 m-auto rounded-lg mt-4 font-montserrat font-medium">Code Versturen</button>
      </form>
    </> 
  )
}

export default TwoFactorPage

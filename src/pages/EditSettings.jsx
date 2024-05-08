import React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'


const EditSettings = () => {


//   Settings States

const [avatar, setAvatar] = useState(localStorage.getItem('avatar'))
const [userName, setUserName] = useState(localStorage.getItem('name'))
const [userModus, setUserModus] = useState(localStorage.getItem('modus'))
const [userMelding, setUserMelding] = useState(localStorage.getItem('melding'))
const [userWachtwoord, setUserWachtwoord] = useState(localStorage.getItem('wachtwoord'))

const navigate = useNavigate();

const imageHandler = (e) => {
    if (e.target.files.length) {
      setAvatar(
        URL.createObjectURL(e.target.files[0])
      );
    }
}

const handleForm = (e) => {
    e.preventDefault()
    localStorage.setItem('name', userName)
    localStorage.setItem('modus', userModus)
    localStorage.setItem('melding', userMelding)
    localStorage.setItem('wachtwoord', userWachtwoord)
    localStorage.setItem('avatar', avatar)

    toast.success('Instellingen bewerkt!')
    return navigate('/settings')
}

  return (
    <div>
      <h2 className="text-rec-blue text-xl font-semibold">Edit Settings</h2>
      <form onSubmit={handleForm} className='flex flex-col gap-y-5 mt-4 mb-4' >
      <div className='mb-6 mt-6'>
        <p className=" text-center font-semibold text-lg mb-1">Avatar Veranderen</p>
        <input type='file' name='avatar'className='mt-4 border-2 w-4/5 m-auto ' accept=".jpg, .jpeg, .png" onChange={imageHandler}></input>
        {avatar ? (
            <img className='w-40 h-40 m-auto object-cover mt-4 rounded' src={avatar}></img>):<></>}
        </div>

        <label className=" text-center font-semibold text-lg mb-1" >Naam Veranderen</label>
        <input type="text" className="border-2  h-10 w-2/3 m-auto rounded-lg mt-4" name='username' value={userName} onChange={(e) => setUserName(e.target.value)}></input>

        
        <label className="text-center font-semibold text-lg mb-1" htmlFor='userwachtwoord'>Wachtwoord Veranderen</label>
        <input type="password" className="border-2  h-10 w-2/3 m-auto rounded-lg mt-4" name='userwachtwoord' value={userWachtwoord} onChange={(e) => setUserWachtwoord(e.target.value)}></input>
        <label htmlFor="modus" className="text-center font-semibold text-lg mt-4 mb-4">Modus Veranderen</label>
        <select name="modus" value={userModus} onChange={(e) => setUserModus(e.target.value)} id="modus" className="border-2  h-10 w-2/3 m-auto rounded-lg mb-4 mt-4">
            <option value="licht" >Licht</option>
            <option value="donker">Donker</option>
        </select>

        <label htmlFor="melding" className="text-center font-semibold text-lg mt-4 mb-4">Meldingen Veranderen</label>
        <select name="melding" value={userMelding} onChange={(e) => setUserMelding(e.target.value)} id="melding" className="border-2  h-10 w-2/3 m-auto rounded-lg mb-4 mt-4">
            <option value="aan" >Aan</option>
            <option value="uit">Uit</option>
        </select>

        <button type="submit" className="border-[1px]  border-rec-blue h-10 w-2/3 m-auto rounded-lg mt-4 font-medium"  >Wijzigen</button>
      </form>

    </div>
  )
}

export default EditSettings

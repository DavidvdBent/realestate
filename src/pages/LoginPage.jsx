import React from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const validateUser = (e) => {
      if (localStorage.getItem('email') === e.target.email.value && localStorage.getItem('wachtwoord') === e.target.wachtwoord.value)  {
        return true;
      }
    }
    const handleLogin = (e) => {
      e.preventDefault();
      
      if (validateUser(e)) {
        if (localStorage.getItem('2fa') === 'true'){
          navigate('/login/2fa')
        }else {
          navigate('/')
        }
      } 
      else {
        toast.error('Gegevens komen niet overeen')
      }
  
    }
  
    return (
      <>
  <h2 className="text-rec-blue text-xl font-semibold">Inloggen</h2>
            <form className="flex flex-col gap-y-5 mt-8 mb-4" onSubmit={handleLogin}>
                  <label className="font-montserrat font-semibold">Email</label>
                  <input type="text" className="border-2  h-10 w-2/3 m-auto rounded-lg" name='email'></input>
                  <label className="font-montserrat font-semibold">Wachtwoord</label>
                  <input type="password" className="border-2  h-10 w-2/3 m-auto rounded-lg " name='wachtwoord'></input>
                  <button type="submit" className="border-[1px]  border-rec-blue h-10 w-2/3 m-auto rounded-lg mt-4 font-montserrat font-medium"  >Inloggen</button>
                  </form>
      </> 
    )
  }

export default LoginPage

import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginLayout = () => {

  return (
    <div className="m-0 p-0">
      <div className="bg-[image:url('./public/images/bgsmall.jpg')] bg-cover bg-center min-h-screen"> 
        <div className="md:flex md:justify-evenly">
          <div className="md:m-auto">
            <img className='flex m-auto' src='./public/images/logoblue.png'></img>
          </div>       
        </div>
        <div className="text-center bg-white rounded-3xl ml-4 mr-4 p-4  mb-4 opacity-90 mt-10">   
          <Outlet/>
        </div>   
        <ToastContainer />
      </div>
    </div>
  )
}

export default LoginLayout

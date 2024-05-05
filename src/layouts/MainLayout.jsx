import React from 'react';
import {useState} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";





const MainLayout = () => {
  return (
    <div className="m-0 p-0">
      <div className="bg-[image:url('./public/images/bgsmall.jpg')] bg-cover bg-center min-h-screen">

        {/* <!-- Header --> */}
        
        <div className="md:flex md:justify-evenly">
            <div className="md:m-auto">
                    <img className='flex m-auto' src='/public/images/logoblue.png'></img>
                <Link to='/'>
                    <h1 className="font-medium p-1 text-center text-white font-montserrat text-[26px]">Real Estate Care</h1>
                </Link>
            </div>
            
            {/* <!-- <path  className= 'm-auto mt-6' d="./images/logo REC1 1.svg"></path> -->
            <!-- NavBar --> */}
            <NavBar/>
        </div>

        <div className="text-center bg-white rounded-3xl ml-4 mr-4 p-4 mt-4 mb-4 opacity-90">

            <Outlet />

            {/* <!-- Hi Section --> */}
            <div className="mt-8 border-t-2 flex justify-evenly">
                <p className="mt-4 p-2">Welkom  <span className="text-rec-blue font-medium">{localStorage.getItem('name')}</span>!</p>
                {/* <p className="mt-4 flex border-2 border-rec-blue rounded-2xl p-2">Uitloggen <IoIosLogOut className=' ml-4 font-medium text-xl text-rec-blue content-center items-center' /></p> */}
                
            </div>
        </div>   
 {/* <!-- Footer --> */ }
        <Footer />
        

    </div>
  </div>
  )
}

export default MainLayout

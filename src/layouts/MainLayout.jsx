import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserSection from '../components/UserSection';

const MainLayout = () => {
  return (
    <div className="m-0 p-0">
      <div className="bg-[image:url('/images/bgsmall.jpg')] bg-cover bg-center min-h-screen">  
        <div className="md:flex md:justify-evenly">
          <Link to='/' className="md:m-auto">
            <img className='flex m-auto' src='/images/logoblue.png'></img>
            <h1 className="font-medium p-1 text-center text-white font-montserrat text-[26px] hover:text-gray-300">Real Estate Care</h1>
          </Link>
          <NavBar/>
        </div>
        <div className="text-center bg-white rounded-3xl ml-4 mr-4 p-4 mt-4 mb-4 opacity-90">
          <Outlet />
          <ToastContainer />
          <UserSection/>
        </div>   
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout

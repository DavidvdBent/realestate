import React from 'react';
import {Link} from 'react-router-dom';







const Footer = () => {
  return (
    <div className="mt-4">
        <div className="">
            <div className="flex justify-evenly mb-4">
                <div className="p-3">
                    <Link className='mb-4' to='/app/inspecties'><p className="mr-2 text-sm text-white font-thin font-montserrat hover:text-rec-blue">Toegewezen Inspecties</p></Link>
                    <Link className='mt-4' to='/app/oude-inspecties'><p className="mr-2 mt-4 text-sm text-white font-thin font-montserrat hover:text-rec-blue">Uitgevoerde Inspecties</p></Link>
                </div>
                <div className="p-3">
                    <Link className='mb-2' to='/app/kennisbank'><p className="mr-2 text-sm text-white font-thin font-montserrat hover:text-rec-blue">Kennisbank</p></Link>
                    <Link className='' to='/app/settings'><p className="mr-2 mt-4 text-sm text-white font-thin font-montserrat hover:text-rec-blue">Instellingen</p></Link>
                </div>
            </div>
        </div>

        <Link to='/'><h3 className="ml-2 mt-6 text-rec-blue text-center text-xl pb-6  font-montserrat hover:text-rec-blue-dark"> Real Estate Care</h3></Link>
    </div>
  )
}

export default Footer

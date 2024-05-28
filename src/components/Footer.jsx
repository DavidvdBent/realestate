import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="mt-4">
        <div className="">
            <div className="flex justify-evenly mb-4">
                <div className="p-3">
                    <Link className='mb-4' to='/checkspage'><p className="mr-2 text-sm text-white font-thin font-montserrat hover:text-rec-blue">Toegewezen Rapportages</p></Link>
                    <Link className='mt-4' to='/pastcheckpage'><p className="mr-2 mt-4 text-sm text-white font-thin font-montserrat hover:text-rec-blue">Verstuurde Rapportages</p></Link>
                </div>
                <div className="p-3">
                    <Link className='mb-2' to='/documentation'><p className="mr-2 text-sm text-white font-thin font-montserrat hover:text-rec-blue">Kennisbank</p></Link>
                    <Link className='' to='/settings'><p className="mr-2 mt-4 text-sm text-white font-thin font-montserrat hover:text-rec-blue">Instellingen</p></Link>
                </div>
            </div>
        </div>

        <Link to='/'><h3 className="ml-2 mt-6 text-rec-blue text-center text-xl  font-montserrat"> Real Estate Care</h3></Link>
    </div>
  )
}

export default Footer

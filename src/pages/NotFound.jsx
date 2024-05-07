import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2 className='text-rec-blue text-3xl my-4 '>404</h2>
      <p className='font-semibold text-lg'>Pagina niet gevonden.</p>
      <Link to='/'><button className="border-[1px]  border-rec-blue h-10 w-2/3 m-auto rounded-lg mt-4 font-medium"  >Ga Terug</button></Link>
    </div>
  )
}

export default NotFound

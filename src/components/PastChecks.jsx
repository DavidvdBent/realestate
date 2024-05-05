import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { CiEdit } from "react-icons/ci";

const Checks = () => {
    const [allChecks, setAllChecks] = useState([]);
    const [loading, setLoading] = useState(true);
    const oldChecks = allChecks.filter((check) => check.nieuw === false)

    useEffect(() => {
        const fetchChecks = async () => {
            try {
                const res = await fetch('http://localhost:5000/checks');
                const data = await res.json();
                setAllChecks(data);   
            } catch (error) {
                console.log('Error fetching data', error);
            }finally {
                setLoading(false);
            }
        }
        fetchChecks();
    }, []);

  return (
    <div>
        <table className='w-5/6  text-left text-gray-600 m-auto'>
            <thead className='font-semibold border-2 border-gray-300'>
                <tr>
                    <th className='px-3 py-4 border-2 border-gray-300'>ID</th>
                    <th className='px-3 py-4 border-2 border-gray-300'>Adres</th>
                    <th className='px-1 py-4 text-sm text-center border-2 border-gray-300'>Bewerken</th>
                </tr>
            </thead>
            <tbody>
        {loading ? (<tr><td>Loading...</td></tr>) : (
        <>
        {oldChecks.map((check, index) => (
                <tr key={index} className='odd:bg-white even:bg-slate-200 border-2 border-gray-300'>
                    <th className='px-3 py-4 border-2 border-gray-300'>{check.id}</th>
                    <td className='px-3 py-4 border-2 border-gray-300'>{check.adres}</td>
                    <td className='px-1 py-4 border-2 border-gray-300 text-rec-blue text-2xl' ><Link to= {`/edit-checks/${check.id}`}><CiEdit className='m-auto'/></Link></td>
                </tr>
        ))}
        
        </>)}
            </tbody>
        </table>
    </div>
  )
}

export default Checks





// {loading ? (<h3>Loading...</h3>) : (
//     <>
//     {allChecks.map((check, index) => (
//         <div key={index}>
//             {check.nieuw === false ? 
//                 <Link to={`/edit-checks/${check.id}`}>
//                 <p className='text-start mt-1 p-2 font-medium'>{check.id} {check.adres}
//                 </p>
//                 </Link>
      
//              : <></>}
//         </div>    
//     ))}
//     </>)}
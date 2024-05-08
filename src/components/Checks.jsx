import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";



const Checks = () => {
    const [allChecks, setAllChecks] = useState([]);
    const [loading, setLoading] = useState(true);
    const newChecks = allChecks.filter((check) => check.nieuw === true)

    // Sorteer op Datum
    const newSortedChecks = newChecks.sort((a,b) => {
        const datumA = Date.parse(a.datum)
        const datumB = Date.parse(b.datum)
        if (datumA < datumB) {
            return -1;
          }
          if (datumA > datumB) {
            return 1;
          }
          return 0;
       
    })

    useEffect(() => {
        const fetchChecks = async () => {
            try {
                const res = await fetch('https://my-json-server.typicode.com/DavidvdBent/realestatedatabase/checks');
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
        <table className=' w-9/10 xs:w-5/6  text-left text-gray-600 m-auto'>
            <thead className='font-semibold'>
                <tr className='border-2 border-gray-300'>
                    <th className='px-3 py-4 border-2 border-gray-300'>ID</th>
                    <th className='px-3 py-4 border-2 border-gray-300 '>Ad<wbr></wbr>res</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center'>Scha<wbr></wbr>de</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center'>Onder<wbr></wbr>houd</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center'>Inspe<wbr></wbr>ctie</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center'>Inven<wbr></wbr>tari<wbr></wbr>satie</th>
                </tr>
            </thead>
            <tbody>
        {loading ? (<tr><td>Loading...</td></tr>) : (
        <>
        {newSortedChecks.map((check, index) => (
                <tr key={index} className='odd:bg-white even:bg-slate-100 border-2 border-gray-300'>
                    <th className='px-3 py-4 border-2 border-gray-300'>{check.id}</th>
                    <td className='px-3 py-4 border-2 border-gray-300'><Link className='text-[10px] xs:text-sm'to={`/checks/${check.id}`}>{check.adres}</Link></td>
                    <td className='px-2 py-4 text-sm text-rec-blue border-2 border-gray-300'>{check.Schade.schadeGemeld === true? <FaCheck className='m-auto' />: <ImCross className='m-auto opacity-30 text-black ' />}</td>
                    <td className='px-2 py-4 text-sm text-rec-blue  border-2 border-gray-300'>{check.Onderhoud.onderhoudGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                    <td className='px-2 py-4 text-sm text-rec-blue  border-2 border-gray-300'>{check.Inspectie.inspectieGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                    <td className='px-2 py-4 text-sm text-rec-blue  border-2 border-gray-300'>{check.Inventarisatie.inventarisatieGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                </tr>
        ))} 
        </>)}
            </tbody>
        </table>
    </div>
  )
}

export default Checks

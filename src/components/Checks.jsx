import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";



const Checks = () => {
    const [allChecks, setAllChecks] = useState([]);
    const [loading, setLoading] = useState(true);
    const newChecks = allChecks.filter((check) => check.nieuw === true)

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
        <table className='w-5/6  text-left text-gray-600 m-auto'>
            <thead className='font-semibold'>
                <tr className='border-2'>
                    <th className='px-3 py-4 border-2'>ID</th>
                    <th className='px-3 py-4 border-2'>Adres</th>
                    <th className='px-1 py-4 border-2 text-sm text-center'><abbr title='Schade'>S</abbr></th>
                    <th className='px-1 py-4 border-2 text-sm text-center'><abbr title='Onderhoud'>O</abbr></th>
                    <th className='px-1 py-4 border-2 text-sm text-center'><abbr title='Inspectie'>IS</abbr></th>
                    <th className='px-1 py-4 border-2 text-sm text-center'><abbr title='Inventarisatie'>IV</abbr></th>
                </tr>
            </thead>
            <tbody>
        {loading ? (<tr><td>Loading...</td></tr>) : (
        <>
        {newChecks.map((check, index) => (
                <tr key={index} className='odd:bg-white even:bg-slate-200 border-2'>
                    <th className='px-3 py-4 border-2'>{check.id}</th>
                    <td className='px-3 py-4 border-2 '><Link to={`/checks/${check.id}`}>{check.adres}</Link></td>
                    <td className='px-2 py-4 text-sm text-rec-blue border-2'>{check.Schade.schadeGemeld === true? <FaCheck className='m-auto' />: <ImCross className='m-auto opacity-30 text-black ' />}</td>
                    <td className='px-2 py-4 text-sm text-rec-blue  border-2'>{check.Onderhoud.onderhoudGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                    <td className='px-2 py-4 text-sm text-rec-blue  border-2'>{check.Inspectie.inspectieGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                    <td className='px-2 py-4 text-sm text-rec-blue  border-2'>{check.Inventarisatie.inventarisatieGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                </tr>
        ))} 
        </>)}
            </tbody>
        </table>
    </div>
  )
}

export default Checks

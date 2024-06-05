import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { getOldInspections } from '../api/inspections';
import { useQuery } from '@tanstack/react-query';

const OudeInspecties = () => {

    const inspecties = useQuery({
        queryKey:  ["oldInspections"],
        queryFn: getOldInspections,
    })
  return (
    <div>
    <table className='w-5/6  text-left text-gray-600 m-auto'>
        <thead className='font-semibold border-2 border-gray-300'>
            <tr>
                <th className='px-3 py-4 border-2 border-gray-300'>ID</th>
                <th className='px-3 py-4 border-2 border-gray-300'>Datum</th>
                <th className='px-3 py-4 border-2 border-gray-300'>Adres</th>
                <th className='px-1 py-4 text-sm text-center border-2 border-gray-300'>Bewerken</th>
            </tr>
        </thead>
        <tbody>
    {inspecties.isLoading ? (<tr><td>Loading...</td></tr>) : (
    <>
    {inspecties.data.map((inspectie, index) => (
            <tr key={index} className='odd:bg-white even:bg-slate-100 border-2 border-gray-300'>
                <th className='px-3 py-4 border-2 border-gray-300'>{inspectie.id}</th>
                <th className='px-3 py-4 border-2 border-gray-300'>{inspectie.datum}</th>
                <td className='px-3 py-4 border-2 border-gray-300'><Link to= {`/app/view-inspectie/${inspectie.id}`}>{inspectie.adres}</Link></td>
                <td className='px-1 py-4 border-2 border-gray-300 text-rec-blue text-xl' ><Link to= {`/app/edit-inspecties/${inspectie.id}`}><FaEdit className='m-auto' /></Link></td>
            </tr>
    ))}
    </>)}
        </tbody>
    </table>
</div>
  )
}
export default OudeInspecties

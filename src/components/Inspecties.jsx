import React from 'react'
import {Link} from 'react-router-dom'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { getNewInspections } from '../api/inspections';
import { useQuery } from '@tanstack/react-query';

const Inspecties = () => {
    const inspecties = useQuery({
        queryKey:  ["inspections"],
        queryFn: getNewInspections,
    })
  return (
    <div>
        <table className=' w-9/10 xs:w-5/6  text-left text-gray-600 m-auto'>
            <thead className='font-semibold'>
                <tr className='border-2 border-gray-300'>
                    <th className='px-3 py-4 border-2 border-gray-300'>Dat<wbr></wbr>um</th>
                    <th className='px-3 py-4 border-2 border-gray-300 '>Ad<wbr></wbr>res</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center'>Scha<wbr></wbr>de</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center'>Onder<wbr></wbr>houd</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center'>Insp<wbr></wbr>ectie</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center'>Inven<wbr></wbr>tari<wbr></wbr>satie</th>
                </tr>
            </thead>
            <tbody>
        {inspecties.isLoading ? (<tr><td>Loading...</td></tr>) : (
        <>
        {inspecties.data.map((inspectie, index) => (
                <tr key={index} className='odd:bg-white even:bg-slate-100 border-2 border-gray-300'>
                    <th className='px-3 py-4 border-2 border-gray-300'>{inspectie.datum}</th>
                    <td className='px-3 py-4 border-2 border-gray-300'><Link className='text-[10px] xs:text-sm'to={`/app/inspectie/${inspectie.id}`}>{inspectie.adres}</Link></td>
                    <td className='px-2 py-4 text-sm text-rec-blue border-2 border-gray-300'>{inspectie.Schade.schadeGemeld === true? <FaCheck className='m-auto' />: <ImCross className='m-auto opacity-30 text-black ' />}</td>
                    <td className='px-2 py-4 text-sm text-rec-blue  border-2 border-gray-300'>{inspectie.Onderhoud.onderhoudGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                    <td className='px-2 py-4 text-sm text-rec-blue  border-2 border-gray-300'>{inspectie.Inspectie.inspectieGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                    <td className='px-2 py-4 text-sm text-rec-blue  border-2 border-gray-300'>{inspectie.Inventarisatie.inventarisatieGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                </tr>
        ))} 
        </>)}
            </tbody>
        </table>
    </div>
  )
}

export default Inspecties

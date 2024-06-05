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
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center xxs:table-cell hidden'>Scha<wbr></wbr>de</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center xxs:table-cell hidden'>Onder<wbr></wbr>houd</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center xxs:table-cell hidden'>Insp<wbr></wbr>ectie</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center xxs:table-cell hidden'>Inven<wbr></wbr>tari<wbr></wbr>satie</th>
                    <th className='px-1 py-4 border-2 border-gray-300 text-sm text-center xxs:hidden table-cell'>ID</th>
                </tr>
            </thead>
            <tbody>
                {inspecties.isLoading ? (<tr><td>Loading...</td></tr>) : (
                <>
                {inspecties.data.map((inspectie, index) => (
                    <tr key={index} className='odd:bg-white even:bg-slate-100 border-2 border-gray-300'>
                        <td className='px-3 py-4 border-2 border-gray-300'>{inspectie.datum}</td>
                        <td className='px-3 py-4 border-2 border-gray-300'><Link to={`/app/inspectie/${inspectie.id}`}>{inspectie.adres}</Link></td>
                        <td className='px-2 py-4 text-sm text-rec-blue border-2 border-gray-300 xxs:table-cell hidden'>{inspectie.Schade.schadeGemeld === true? <FaCheck className='m-auto' />: <ImCross className='m-auto opacity-30 text-black ' />}</td>
                        <td className='px-2 py-4 text-sm text-rec-blue  border-2 border-gray-300 xxs:table-cell hidden'>{inspectie.Onderhoud.onderhoudGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                        <td className='px-2 py-4 text-sm text-rec-blue  border-2 border-gray-300 xxs:table-cell hidden'>{inspectie.Inspectie.inspectieGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                        <td className='px-2 py-4 text-sm text-rec-blue  border-2 border-gray-300 xxs:table-cell hidden'>{inspectie.Inventarisatie.inventarisatieGemeld === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                        <td className='px-2 py-4 text-nm text-rec-blue  border-2 border-gray-300 xxs:hidden table-cell '>{inspectie.id}</td>
                    </tr>
                    ))} 
                </>)}
            </tbody>
        </table>
    </div>
  )
}

export default Inspecties

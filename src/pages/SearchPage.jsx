import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAllInspections } from '../api/inspections'
import Search from '../components/Search'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const SearchPage = () => {
  const allInspections = useQuery({
      queryKey:  ["inspections"],
      queryFn: getAllInspections,
  })
  const [filteredInspections, setFilteredInspections] = useState([])
  const filterInspections = (search) => { 
      const filteredInspections = allInspections.data.filter((inspection) =>
        inspection.adres.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredInspections(filteredInspections);
    }
  return (
    <div>
      <h2 className="text-rec-blue text-xl font-semibold">Zoek</h2>
      <Search onChangeCallback={filterInspections}/>
      <table className=' w-9/10 xs:w-5/6  text-left text-gray-600 m-auto mt-2'>
        <thead className='font-semibold'>
            <tr className='border-2 border-gray-800'>
              <th className='px-3 py-4 border-2 border-gray-300 '>ID</th>   
              <th className='px-3 py-4 border-2 border-gray-300 '>Ad<wbr></wbr>res</th>
              <th className='px-3 py-4 border-2 border-gray-300'>Nie<wbr></wbr>uw</th>
            </tr>
        </thead>
        <tbody>
          {filteredInspections.isLoading ? (<tr><td>Loading...</td></tr>) : (
            <>
              {filteredInspections.map((inspection, index) => (
                <tr key={index} className='odd:bg-white even:bg-slate-100 border-2 border-gray-300'>
                  <td className='px-3 py-4 border-2 border-gray-300'>{inspection.id}</td>
                  <td className='px-3 py-4 border-2 border-gray-300'><Link className='text-[10px] xs:text-sm'to={inspection.nieuw ? `/app/inspectie/${inspection.id}` : `/app/view-inspectie/${inspection.id}`}>{inspection.adres}</Link></td>
                  <td className='px-3 py-4 border-2 border-gray-300'>{inspection.nieuw === true? <FaCheck className='m-auto'/> : <ImCross className='m-auto opacity-30 text-black' />}</td>
                </tr>
              ))} 
            </>
          )}
        </tbody>
      </table>
      {filteredInspections.length === 0 ? <p className='text-center italic text-gray-500'>Geen Inspecties gevonden </p> : <></>}
    </div>
  )
}

export default SearchPage

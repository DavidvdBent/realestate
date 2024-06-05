import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import { getInspection } from '../api/inspections';
import { FaCheck } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';



const ViewInspectiePage = () => {
    const { id } = useParams();
    const { data: inspectie , error, isLoading } = useQuery({
      queryKey: ["inspection", id],
      queryFn: () => getInspection(id),
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }
    const schade = inspectie.Schade.schadeGemeld;
    const onderhoud = inspectie.Onderhoud.onderhoudGemeld;
    const inspec = inspectie.Inspectie.inspectieGemeld
    const invent = inspectie.Inventarisatie.inventarisatieGemeld;
    
  return (
    <div>
         <h2 className="text-rec-blue text-xl font-semibold ">Inspectie: {inspectie.id}</h2>
      <div className='text-start mt-4 border-b-2 pb-2 '>
        <p>Inspectie ID:<span className='font-semibold'>{inspectie.id}</span></p>
        <p>Datum aangemeld: <span className='font-semibold'>{inspectie.datum}</span></p>
        <p className='flex items-center gap-2'>Adres: <span className='font-semibold'>{inspectie.adres}</span></p>
        {schade ? <p className=' flex items-center gap-2'>Schade: <FaCheck /></p> : <></> }
        {onderhoud ?<p className=' flex items-center gap-2'>Onderhoud: <FaCheck /></p> : <></> }
        {inspec ? <p className=' flex items-center gap-2'>Inspectie: <FaCheck /></p> : <></> }
        {invent ? <p className=' flex items-center gap-2'>Inventarisatie: <FaCheck /></p> : <></> }
      </div>
      {schade ? (
        <div className='flex flex-col items-start gap-y-1 border-t-2 pb-2'>
            <h3 className='mt-3 font-semibold text-lg'>Schade</h3>
            <p>Nieuw: <span className='font-semibold'>{inspectie.Schade.schadeLocatie ? <>Ja</> : <>Nee</>}</span></p>
            <p>Locatie: <span className='font-semibold'>{inspectie.Schade.schadeLocatie}</span></p>
            <p>Soort: <span className='font-semibold'>{inspectie.Schade.schadeSoort}</span></p>
            <p>Datum: <span className='font-semibold'>{inspectie.Schade.schadeDatum}</span></p>
            <p>Acuut: <span className='font-semibold'>{inspectie.Schade.schadeAcuut ? <>Ja</> : <>Nee</>}</span></p>
            <p>Omschrijving:</p>
            <p className='font-semibold text-start'>{inspectie.Schade.schadeOmschrijving}</p>
            <p>Fotos:</p>
            {inspectie.Schade.schadeFotos.length === 0 ? <p className='italic'>Geen Foto's Toegevoegd</p> : (
            <div className=' grid grid-cols-2 gap-2 mx-2'>
                {inspectie.Schade.schadeFotos.map((image, index) =>
                    <img key={index}className='my-2 rounded-xl'
                        width="200px"
                        height="200px"
                        src={image}>
                    </img> )} 
        </div>
            )}
        </div>
      ):<></>}
      {onderhoud ? (
        <div className='flex flex-col items-start gap-y-1 border-t-2 pb-2'>
            <h3 className='mt-3 font-semibold text-lg'>Onderhoud</h3>
            <p>Locatie: <span className='font-semibold'>{inspectie.Onderhoud.onderhoudLocatie}</span></p>
            <p>Soort: <span className='font-semibold'>{inspectie.Onderhoud.onderhoudSoort}</span></p>
            <p>Acuut: <span className='font-semibold'>{inspectie.Onderhoud.onderhoudAcuut ? <>Ja</> : <>Nee</>}</span></p>
            <p>Prijs: <span className='font-semibold'>{inspectie.Onderhoud.onderhoudPrijs}</span></p>
            <p>Fotos:</p>
            {inspectie.Onderhoud.onderhoudFotos.length === 0 ? <p className='italic'>Geen Foto's Toegevoegd</p> : (
            <div className=' grid grid-cols-2 gap-2 mx-2'>
                {inspectie.Onderhoud.onderhoudFotos.map((image, index) =>
                    <img key={index}className='my-2 rounded-xl'
                        width="200px"
                        height="200px"
                        src={image}>
                    </img>            
        )} 
        </div>
            )}
        </div>
      ):<></>}
      {inspec ? (
        <div className='flex flex-col items-start gap-y-1 border-t-2 pb-2'>
            <h3 className='mt-3 font-semibold text-lg'>Inspectie</h3>
            <p>Locatie: <span className='font-semibold'>{inspectie.Inspectie.inspectieLocatie}</span></p>
            <p>Soort: <span className='font-semibold'>{inspectie.Inspectie.inspectieSoort}</span></p>
            <p>Storing: </p>
            <p className='font-semibold text-start'>{inspectie.Inspectie.inspectieStoring}</p>
            <p className='flex gap-2 items-center'>Procedure:{inspectie.Inspectie.inspectieProcedure ? <a className="text-gray-800 flex items-center gap-2" href={inspectie.Inspectie.inspectieProcedure} download>Download <FaDownload /></a> : <> Geen Pdf Toegevoegd</>}</p>
            <p>Goedgekeurd: <span className='font-semibold'>{inspectie.Inspectie.inspectieGoedgekeurd ? <>Ja</> : <>Nee</>}</span></p>
            <p>Opmerking:</p>
            <p className='font-semibold text-start'>{inspectie.Inspectie.inspectieOpmerking}</p>
            <p>Fotos:</p>
            {inspectie.Inspectie.inspectieFotos.length === 0 ? <p className='italic'>Geen Foto's Toegevoegd</p> : (
            <div className=' grid grid-cols-2 gap-2 mx-2'>
                {inspectie.Inspectie.inspectieFotos.map((image, index) =>
                    <img key={index}className='my-2 rounded-xl'
                        width="200px"
                        height="200px"
                        src={image}>
                    </img>            
        )} 
        </div>
            )}
        </div>
      ):<></>}
      {invent ? (
        <div className='flex flex-col items-start gap-y-1 border-t-2 pb-2'>
            <h3 className='mt-3 font-semibold text-lg'>Inventarisatie</h3>
            <p className='flex gap-2 items-center'>Situatie:{inspectie.Inventarisatie.invSituatie ? <a className="text-gray-800 flex items-center gap-2" href={inspectie.Inventarisatie.invSituatie} download>Download <FaDownload /></a> : <> Geen Pdf Toegevoegd</>}</p>
            <p>Locatie: <span className='font-semibold'>{inspectie.Inventarisatie.invLocatie}</span></p>
            <p>Uitvoerder: <span className='font-semibold'>{inspectie.Inventarisatie.invUitvoerder}</span></p>
            <p>Beschrijving: </p>
            <p className='font-semibold text-start'>{inspectie.Inventarisatie.invBeschrijving}</p>
            <p>Actie: <span className='font-semibold'>{inspectie.Inventarisatie.invActie}</span></p>
            <p>Opmerking:</p>
            <p className='font-semibold text-start'>{inspectie.Inventarisatie.invOpmerking}</p>
            <p>Fotos:</p>
            {inspectie.Inventarisatie.invFotos.length === 0 ? <p className='italic'>Geen Foto's Toegevoegd</p> : (
            <div className=' grid grid-cols-2 gap-2 mx-2'>
                {inspectie.Inventarisatie.invFotos.map((image, index) =>
                    <img key={index}className='my-2 rounded-xl'
                        width="200px"
                        height="200px"
                        src={image}>
                    </img>            
        )} 
        </div>
            )}
        </div>
      ):<></>}
      <div className="flex justify-between mx-4">
      <Link to="/app/oude-inspecties"><h2 className="text-gray-700 italic font-semibold mt-6">Terug</h2></Link>
      <Link to= {`/app/edit-inspecties/${inspectie.id}`}><h2 className="text-rec-blue italic font-semibold mt-6" >Bewerken</h2></Link>
      </div>

    </div>
  )
}

export default ViewInspectiePage

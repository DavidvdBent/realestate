import React from 'react'

const InspectieForm = ({inspectieLocatie, handleInspectieLocatie,
    inspectieSoort, handleInspectieSoort,
    inspectieStoring, handleInspectieStoring,
    inspectieProcedure, handleInspectieProcedure,
    inspectieGoedgekeurd, handleInspectieGoedgekeurd,
    inspectieOpmerking, handleInspectieOpmerking,
    inspectieFotos, imageInspectieHandler,
    removeInspectieImage
    }) => {
  return (
    <div className='flex flex-col gap-y-4 border-t-2'>
        <h3 className='mt-3 font-semibold'>Inspectie</h3>
        <label className=" font-medium" >Locatie</label>
        <input type="text" className="border-2  h-10 w-2/3 m-auto rounded-lg" name='Locatie' value={inspectieLocatie} onChange={handleInspectieLocatie}></input>

        <label htmlFor="Soort">Soort Installatie</label>
        <select name="Soort" value={inspectieSoort} onChange={handleInspectieSoort} id="Soort" className="border-2  h-10 w-2/3 m-auto rounded-lg">
            <option value="koeling" >Koeling</option>
            <option value="verwarming">Verwarming</option>
            <option value="luchtverversing">Luchtverversing</option>
            <option value="elektra">Elektra</option>
            <option value="beveiliging" >Beveiliging</option>
            <option value="anders" >Anders</option>
        </select>
        <label className=" font-medium" htmlFor='Storing' >Gemelde Storing</label>
        <textarea className="border-2 w-4/5 m-auto rounded-lg h-[120px] " name='Storing' value={inspectieStoring} onChange={handleInspectieStoring}></textarea>

        <div className='mt-3 m-auto mb-2'>
        <h2 className='mt-2 text-center'>Tekstprocedure</h2>
        <input type='file' name='tekstprocedure'className='mt-4 border-2 w-4/5 m-auto rounded-lg h-[120px] border-rec-blue bg-gray-300' accept=".pdf" onChange={handleInspectieProcedure}></input>
        </div>
        
        <div className='mt-3 m-auto mb-2'>
            <h2 className='mt-2 text-center'>Goedgekeurd</h2>
                <div className='flex mt-2'>
                <input type ='radio' name='goedgekeurd' className='mr-2' value='True' checked={inspectieGoedgekeurd === "True"} onChange={handleInspectieGoedgekeurd}></input>
                <label className='mr-4'>Ja</label>
                <input type ='radio' name='goedgekeurd' className='mr-2' value='False' checked={inspectieGoedgekeurd === "False"} onChange={handleInspectieGoedgekeurd}></input>
                <label>Nee</label>
            </div>
        </div>
        <label className=" font-medium" htmlFor='opmerking' >opmerking</label>
        <textarea className="border-2 w-4/5 m-auto rounded-lg h-[120px] " name='Omschrijving' value={inspectieOpmerking} onChange={handleInspectieOpmerking}></textarea>
        
        <div className='mt-3 m-auto mb-2'>
        <h2 className='mt-2 text-center'>Foto's Toevoegen</h2>
        <input type='file' name='inspectieFotos'className='mt-4 border-2 w-4/5 m-auto rounded-lg h-[120px] border-rec-blue bg-gray-300' multiple accept=".jpg, .jpeg, .png" onChange={imageInspectieHandler}></input>
        <div className=' grid grid-cols-2 mt-3 gap-2 mx-5'>
        {inspectieFotos.map((image, index) => 
            <img key={index}className='my-2 rounded-xl'
            width="200"
            height="200"
            src={image}
            onClick={() => removeInspectieImage(image)}></img>
        )}
        </div>
        </div>
        </div>  
  )
}

export default InspectieForm

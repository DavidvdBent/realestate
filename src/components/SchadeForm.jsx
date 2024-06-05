import React from 'react'

const SchadeForm = ({schadeNieuw, handleSchadeNieuw, schadeLocatie, handleSchadeLocatie, schadeSoort, 
    handleSchadeSoort, schadeDatum, handleSchadeDatum, schadeAcuut, handleSchadeAcuut, schadeOmschrijving ,
     handleSchadeOmschrijving, schadeFotos, imageSchadeHandler, removeSchadeImage}) => {
  return (
    <div className='flex flex-col gap-y-4 border-t-2'>
        <h3 className='mt-3 font-semibold'>Schade</h3>
            <h2 className='mt-2 text-center'>Nieuwe Schade</h2>
            <div className='flex mt-2 m-auto'>
            <input type ='radio' name='Nieuw' className='mr-2' value='True' checked={schadeNieuw === "True"} onChange={handleSchadeNieuw}></input>
            <label className='mr-4' htmlFor="Nieuw" >Ja</label>
            <input type ='radio' name='Nieuw' className='mr-2' value='False' checked={schadeNieuw === "False"} onChange={handleSchadeNieuw}></input>
            <label  htmlFor="Nieuw">Nee</label>
            </div>
        <label className=" font-medium" >Locatie</label>
        <input type="text" className="border-2  h-10 w-2/3 m-auto rounded-lg" name='Locatie' value={schadeLocatie} onChange={handleSchadeLocatie}></input>
        <label htmlFor="Soort">Soort Schade</label>
        <select name="Soort" value={schadeSoort} onChange={handleSchadeSoort} id="Soort" className="border-2  h-10 w-2/3 m-auto rounded-lg">
            <option value="moedwillig" >Moedwillig</option>
            <option value="slijtage">Slijtage</option>
            <option value="geweld">Geweld</option>
            <option value="normaal gebruik">Normaal gebruik</option>
            <option value="calamiteit" >Calamiteit</option>
            <option value="anders" >Anders</option>
        </select>
        <label name='Datum'>Datum</label>
        <input type='date' name='Datum' value={schadeDatum} onChange= {handleSchadeDatum} className="border-2  h-10 w-2/3 m-auto rounded-lg"></input>
        <div className='mt-3 m-auto mb-2'>
            <h2 className='mt-2 text-center'>Acute actie vereist</h2>
            <div className='flex mt-2'>
            <input type ='radio' name='Acuut' className='mr-2' value='True' checked={schadeAcuut === "True"} onChange={handleSchadeAcuut}></input>
            <label className='mr-4' htmlFor='Acuut'>Ja</label>
            <input type ='radio' name='Acuut' className='mr-2' value='False' checked={schadeAcuut === "False"} onChange={handleSchadeAcuut}></input>
            <label htmlFor='Acuut'>Nee</label>
            </div>
        </div>
        <label className=" font-medium" htmlFor='Omschrijving' >Omschrijving</label>
        <textarea className="border-2 w-4/5 m-auto rounded-lg h-[120px] " name='Omschrijving' value={schadeOmschrijving} onChange={handleSchadeOmschrijving}></textarea>
        
        <div className='mt-3 m-auto mb-2'>
        <h2 className='mt-2 text-center'>Foto's Toevoegen</h2>
        <input type='file' name='schadeFotos'className='mt-4 border-2 w-4/5 m-auto rounded-lg h-[120px] border-rec-blue bg-gray-300' multiple accept=".jpg, .jpeg, .png" onChange={imageSchadeHandler}></input>
        <div>

        <div className=' grid grid-cols-2 mt-3 gap-2 mx-5'>
        {schadeFotos.map((image, index) => 
            <img key={index}className='my-2 rounded-xl'
            width="200"
            height="200"
            src={image}
            onClick={() => removeSchadeImage(image)}></img>
        )}
        </div>
        </div>
        </div>
        </div>    
  )
}

export default SchadeForm
 
import React from 'react'

const OnderhoudForm = ({
  onderhoudLocatie, handleOnderhoudLocatie,
  onderhoudSoort, handleOnderhoudSoort,
  onderhoudAcuut, handleOnderhoudAcuut,
  onderhoudPrijs, handleOnderhoudPrijs,
  onderhoudFotos, handleOnderhoudFotos
}) => {

  return (
        <div className='flex flex-col gap-y-4 border-t-2'>
          <h3 className='mt-3 font-semibold'>Onderhoud</h3>

          <label className=" font-medium" >Locatie</label>
          <input type="text" className="border-2  h-10 w-2/3 m-auto rounded-lg" name='Locatie' value={onderhoudLocatie} onChange={handleOnderhoudLocatie}></input>
          <label htmlFor="Soort">Soort Onderhoud</label>
          <select name="Soort" value={onderhoudSoort} onChange={handleOnderhoudSoort} id="Soort" className="border-2  h-10 w-2/3 m-auto rounded-lg">
            <option value="schilderwerk" >Schilderwerk</option>
            <option value="houtrot">Houtrot</option>
            <option value="elektra">Elektra</option>
            <option value="leiding werk">Leiding werk</option>
            <option value="beglazing" >Beglazing</option>
            <option value="anders" >Anders</option>
        </select>
            <div className='mt-3 m-auto mb-2'>
              <h2 className='mt-2 text-center'>Acute actie vereist</h2>
              <div className='flex mt-2'>
              <input type ='radio' name='Acuut' className='mr-2' value='True' checked={onderhoudAcuut === "True"} onChange={handleOnderhoudAcuut}></input>
              <label className='mr-4'>Ja</label>
              <input type ='radio' name='Acuut' className='mr-2' value='False' checked={onderhoudAcuut === "False"} onChange={handleOnderhoudAcuut}></input>
              <label>Nee</label>
              </div>
            </div>
              <select name="onderhoudprijs" value={onderhoudPrijs} onChange={handleOnderhoudPrijs} id="onderhoudprijs" className="border-2  h-10 w-2/3 m-auto rounded-lg">
                <option value="0-500" >$0-500</option>
                <option value="500-1500">$500-1500</option>
                <option value="1500+">$1500+</option>
              </select>
              <div className='mt-3 m-auto mb-2'>
              <h2 className='mt-2 text-center'>Foto's Toevoegen</h2>
              <input type='file' name='onderhoudFotos'className='mt-4 border-2 w-4/5 m-auto rounded-lg h-[120px] border-rec-blue bg-gray-300' multiple accept=".jpg, .jpeg, .png" value={onderhoudFotos} onChange={handleOnderhoudFotos}></input>
              </div>
        </div>
  )
}

export default OnderhoudForm

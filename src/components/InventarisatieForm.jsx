import React from 'react'

const InventarisatieForm = ({
    invSituatie, handleInvSituatie,
    invLocatie, handleInvLocatie,
    invUitvoerder, handleInvUitvoerder,
    invBeschrijving, handleInvBeschrijving,
    invActie, handleInvActie,
    invOpmerking, handleInvOpmerking,
    invFotos, imageInvHandler,
    removeInvImage
}) => {
  return (
    <div className='flex flex-col gap-y-4 border-t-2'>
    <h3 className='mt-3 font-semibold'>Inventarisatie</h3>

    <div className='mt-3 m-auto mb-2'>
    <h2 className='mt-2 text-center'>Situatie</h2>
    <input type='file' name='situatie' className='mt-4 border-2 w-4/5 m-auto'  accept=".pdf" onChange={handleInvSituatie}></input>
    </div>

    <label className=" font-medium" >Locatie</label>
    <input type="text" className="border-2  h-10 w-2/3 m-auto rounded-lg" name='Locatie' value={invLocatie} onChange={handleInvLocatie}></input>

    <label htmlFor="uitvoerder">Uitgevoerd door</label>
    <select name="uitvoerder" value={invUitvoerder} onChange={handleInvUitvoerder} id="uitvoerder" className="border-2  h-10 w-2/3 m-auto rounded-lg">
        <option value="huurder" >Huurder</option>
        <option value="aanemer">Aanemer</option>
        <option value="onbekend">Onbekend</option>
    </select>

    <label className=" font-medium" htmlFor='beschrijving' >Beschrijving</label>
    <textarea className="border-2 w-4/5 m-auto rounded-lg h-[120px] " name='beschrijving' value={invBeschrijving} onChange={handleInvBeschrijving}></textarea>
    
    <label htmlFor="actie">Actie</label>
    <select name="actie" value={invActie} onChange={handleInvActie} id="actie" className="border-2  h-10 w-2/3 m-auto rounded-lg">
        <option value="accepteren" >Accepteren</option>
        <option value="keuren">Keuren</option>
        <option value="verwijderen">Verwijderen</option>
        <option value="aanpassen en keuren">Aanpassen en keuren</option>
    </select>

    <label className=" font-medium" htmlFor='opmerking' >opmerking</label>
    <textarea className="border-2 w-4/5 m-auto rounded-lg h-[120px] " name='Omschrijving' value={invOpmerking} onChange={handleInvOpmerking}></textarea>
    
    <div className='mt-3 m-auto mb-2'>
              <h2 className='mt-2 text-center'>Foto's Toevoegen</h2>
              <input type='file' name='invFotos' className='mt-4 border-2 w-4/5 m-auto'  multiple accept=".jpg, .jpeg, .png" onChange={imageInvHandler}></input>
              <div className=' grid grid-cols-2 mt-3 gap-2 mx-5'>
              {invFotos.map((image, index) => 
                  <img key={index}className='my-2 rounded-xl'
                  width="200"
                  height="200"
                  src={image}
                  onClick={() => removeInvImage(image)}></img>
              )}
              </div>
              </div>
    </div>  
  )
}

export default InventarisatieForm

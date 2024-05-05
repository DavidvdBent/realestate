import React, { useState } from 'react'
import { useParams , useLoaderData, Navigate, useNavigate} from 'react-router-dom';
import SchadeForm from '../components/SchadeForm';



const CheckPage = ({addEditCheck}) => {
  const { id, adres } = useParams();
  const check = useLoaderData();
  const [schadeLocatie, setSchadeLocatie] = useState(check.Schade.schadeLocatie);
  const [schadeNieuw, setSchadeNieuw] = useState(check.Schade.schadeNieuw);
  const [schadeAcuut, setSchadeAcuut] = useState(check.Schade.schadeAcuut);
  const [schadeSoort, setSchadeSoort] = useState(check.Schade.schadeSoort);
  const [schadeDatum, setSchadeDatum] = useState(check.Schade.schadeDatum);
  const [schadeOmschrijving, setSchadeOmschrijving] = useState(check.Schade.schadeOmschrijving);
  const [schadeFotos, setSchadeFotos] = useState();

  const navigate = useNavigate();

  const imageHandler = (e) => {
    if (e.target.files) {
      const imageArray = array.from(e.target.files).map((file) =>
      URL.createObjectURL(file))
      setSchadeFotos((prevImages) =>
      prevImages.concat(imageArray)
    );
    }
}

  // checkbox states
  // let schadePrev = true;
  // {check.Schade.Gemeld === 'true' ? schadePrev = true :  schadePrev = false}
  
  const [schadeGemeld, setSchadeGemeld] = useState(check.Schade.schadeGemeld === true)
  const schadeCheckHandler = () => {
    setSchadeGemeld(!schadeGemeld)
  }
const submitForm = (e) => {
  console.log(e)
  e.preventDefault();
  const editCheck = {
      id,
      adres : check.adres ,
      nieuw: false,
      Schade: {
        schadeGemeld,
        schadeNieuw,
        schadeLocatie,
        schadeSoort,
        schadeDatum,
        schadeAcuut,
        schadeOmschrijving,
        schadeFotos
      }
  };

  addEditCheck(editCheck);
  return navigate('/PastCheckPage')
}

  return (
  <div>
    <h2 className="text-rec-blue text-xl font-semibold ">Check: {check.id}</h2>
    <div className='text-start mt-4 border-b-2 '>
      <p>Check ID:<span className='font-semibold'>{check.id}</span></p>
      <p className='mb-3'>Adres: <span className='font-semibold'>{check.adres}</span></p>
    </div>
    <form className="flex flex-col gap-y-5 mt-4 mb-4 " onSubmit={submitForm}>
      <fieldset className='text-start mb-4'>
        <legend>Check-in Redenen</legend>
        <div className='mt-2'>
          <input type="checkbox" id="schadeGemeld" name="schadeGemeld" className='mr-2'
          checked={schadeGemeld}
          onChange={schadeCheckHandler}
          />
          <label htmlFor="Gemeld">Schade</label>
        </div>
        <div>
          <input type="checkbox" id="onderhoud" name="onderhoud" className='mr-2'/>
          <label htmlFor="onderhoud">Onderhoud</label>
        </div>
        <div>
          <input type="checkbox" id="inspectie" name="inspectie" className='mr-2'/>
          <label htmlFor="inspectie">Inspectie</label>
        </div>
        <div>
          <input type="checkbox" id="inventarisatie" name="inventarisatie" className='mr-2'/>
          <label htmlFor="inventarisatie">Inventarisatie</label>
        </div>
      </fieldset>


      {/* Schade Formulier */}
      {schadeGemeld ? <div className='flex flex-col gap-y-4 border-t-2'>
        <h3 className='mt-3'>Schade opnemen</h3>
            <h2 className='mt-2 text-center'>Nieuwe Schade</h2>
            <div className='flex mt-2 m-auto'>
            <input type ='radio' name='Nieuw' className='mr-2' value='True' checked={schadeNieuw === "True"} onChange={(e) => setSchadeNieuw(e.target.value)}></input>
            <label className='mr-4' htmlFor="Nieuw" >Ja</label>
            <input type ='radio' name='Nieuw' className='mr-2' value='False' checked={schadeNieuw === "False"} onChange={(e) => setSchadeNieuw(e.target.value)}></input>
            <label  htmlFor="Nieuw">Nee</label>
            </div>
        <label className=" font-medium" >Locatie</label>
        <input type="text" className="border-2  h-10 w-2/3 m-auto rounded-lg" name='Locatie' value={schadeLocatie} onChange={(e) => setSchadeLocatie(e.target.value)}></input>
        <div className='mt-3 m-auto mb-4'>
        </div>
        <label htmlFor="Soort">Soort Schade</label>
        <select name="Soort" value={schadeSoort} onChange={(e) => setSchadeSoort(e.target.value)} id="Soort" className="border-2  h-10 w-2/3 m-auto rounded-lg">
            <option value="moedwillig" >Moedwillig</option>
            <option value="slijtage">Slijtage</option>
            <option value="geweld">Geweld</option>
            <option value="normaal gebruik">Normaal gebruik</option>
            <option value="calamiteit" >Calamiteit</option>
            <option value="anders" >Anders</option>
        </select>
        <label name='Datum'>Datum</label>
        <input type='date' name='Datum' value={schadeDatum} onChange= {(e) => setSchadeDatum(e.target.value)} className="border-2  h-10 w-2/3 m-auto rounded-lg"></input>
        <div className='mt-3 m-auto mb-2'>
            <h2 className='mt-2 text-center'>Acute actie vereist</h2>
            <div className='flex mt-2'>
            <input type ='radio' name='Acuut' className='mr-2' value='True' checked={schadeAcuut === "True"} onChange={(e) => setSchadeAcuut(e.target.value)}></input>
            <label className='mr-4'>Ja</label>
            <input type ='radio' name='Acuut' className='mr-2' value='False' checked={schadeAcuut === "False"} onChange={(e) => setSchadeAcuut(e.target.value)}></input>
            <label>Nee</label>
            </div>
        </div>
        <label className=" font-medium" htmlFor='Omschrijving' >Omschrijving</label>
        <textarea className="border-2 w-4/5 m-auto rounded-lg h-[120px] " name='Omschrijving' value={schadeOmschrijving} onChange={(e) => setSchadeOmschrijving(e.target.value)}></textarea>
        <div className='mt-3 m-auto mb-2'>
        <h2 className='mt-2 text-center'>Foto's Toevoegen</h2>
        <input type='file' name='schadeFotos'className='mt-4 border-2 w-4/5 m-auto rounded-lg h-[120px] border-rec-blue bg-gray-300' accept=".jpg, .jpeg, .png" multiple onChange={imageHandler}></input>
        {schadeFotos.preview ? (
            <img
              src={schadeFotos.preview}
              alt="dummy"
              width="50"
              height="50"
              className="my-10 mx-5"
            />):<></>}
        
        </div>
        </div> 
        // TODO: FOTO ELEMENT TOEVOEGEN
        : <></>}

        {/* Inspectie Formulier */}
        <button type="submit" className="border-[1px]  border-rec-blue h-10 w-2/3 m-auto rounded-lg mt-4 font-medium"  >Versturen</button>
    </form>   
  </div>

)
}

const checkLoader = async ({params}) => {
  const res = await fetch(`http://localhost:5000/checks/${params.id}`);
  const data = await res.json();
  return data;
}

export {CheckPage as default, checkLoader };

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation} from '@tanstack/react-query';
import SchadeForm from '../components/SchadeForm';
import OnderhoudForm from '../components/OnderhoudForm';
import InspectieForm from '../components/InspectieForm';
import InventarisatieForm from '../components/InventarisatieForm';
import { toast } from 'react-toastify';
import { getInspection, editInspection } from '../api/inspections';

const InspectiePage = () => {
  const { id } = useParams();
  const { data: inspectie, error, isLoading } = useQuery({
    queryKey: ["inspection", id],
    queryFn: () => getInspection(id),
  });

  const [schadeLocatie, setSchadeLocatie] = useState('');
  const [schadeNieuw, setSchadeNieuw] = useState('False');
  const [schadeAcuut, setSchadeAcuut] = useState('False');
  const [schadeSoort, setSchadeSoort] = useState('normaal gebruik');
  const [schadeDatum, setSchadeDatum] = useState('');
  const [schadeOmschrijving, setSchadeOmschrijving] = useState('');
  const [schadeFotos, setSchadeFotos] = useState([]);

  const navigate = useNavigate();

  const handleSchadeLocatie = (e) => { setSchadeLocatie(e.target.value); }
  const handleSchadeNieuw = (e) => { setSchadeNieuw(e.target.value); }
  const handleSchadeAcuut = (e) => { setSchadeAcuut(e.target.value); }
  const handleSchadeSoort = (e) => { setSchadeSoort(e.target.value); }
  const handleSchadeDatum = (e) => { setSchadeDatum(e.target.value); }
  const handleSchadeOmschrijving = (e) => { setSchadeOmschrijving(e.target.value); }

  const [onderhoudLocatie, setOnderhoudLocatie] = useState('');
  const [onderhoudAcuut, setOnderhoudAcuut] = useState('False');
  const [onderhoudSoort, setOnderhoudSoort] = useState('anders');
  const [onderhoudPrijs, setOnderhoudPrijs] = useState('0-500');
  const [onderhoudFotos, setOnderhoudFotos] = useState([]);



  const handleOnderhoudLocatie = (e) => { setOnderhoudLocatie(e.target.value); }
  const handleOnderhoudAcuut = (e) => { setOnderhoudAcuut(e.target.value); }
  const handleOnderhoudSoort = (e) => { setOnderhoudSoort(e.target.value); }
  const handleOnderhoudPrijs = (e) => { setOnderhoudPrijs(e.target.value); }

  const schadeCheckHandler = () => {
    setSchadeGemeld(!schadeGemeld);
  }

  const onderhoudCheckHandler = () => {
    setOnderhoudGemeld(!onderhoudGemeld);
  }

  const inspectieCheckHandler = () => {
    setInspectieGemeld(!inspectieGemeld);
  }

  const [inspectieLocatie, setInspectieLocatie] = useState('');
  const [inspectieSoort, setInspectieSoort] = useState('anders');
  const [inspectieStoring, setInspectieStoring] = useState('');
  const [inspectieProcedure, setInspectieProcedure] = useState('');
  const [inspectieGoedgekeurd, setInspectieGoedgekeurd] = useState('True');
  const [inspectieOpmerking, setInspectieOpmerking] = useState('');
  const [inspectieFotos, setInspectieFotos] = useState([]);

  const handleInspectieLocatie = (e) => { setInspectieLocatie(e.target.value); }
  const handleInspectieSoort = (e) => { setInspectieSoort(e.target.value); }
  const handleInspectieStoring = (e) => { setInspectieStoring(e.target.value); }
  const handleInspectieProcedure = (e) => { setInspectieProcedure(e.target.value); }
  const handleInspectieGoedgekeurd = (e) => { setInspectieGoedgekeurd(e.target.value); }
  const handleInspectieOpmerking = (e) => { setInspectieOpmerking(e.target.value); }


  const inventarisatieCheckHandler = () => {
    setInventarisatieGemeld(!inventarisatieGemeld);
  }

  const [invSituatie, setInvSituatie] = useState('');
  const [invLocatie, setInvLocatie] = useState('');
  const [invUitvoerder, setInvUitvoerder] = useState('');
  const [invBeschrijving, setInvBeschrijving] = useState('');
  const [invActie, setInvActie] = useState('');
  const [invOpmerking, setInvOpmerking] = useState('');
  const [invFotos, setInvFotos] = useState([]);

  const handleInvSituatie = (e) => { setInvSituatie(e.target.value); }
  const handleInvLocatie = (e) => { setInvLocatie(e.target.value); }
  const handleInvUitvoerder = (e) => { setInvUitvoerder(e.target.value); }
  const handleInvBeschrijving = (e) => { setInvBeschrijving(e.target.value); }
  const handleInvActie = (e) => { setInvActie(e.target.value); }
  const handleInvOpmerking = (e) => { setInvOpmerking(e.target.value); }

  const imageSchadeHandler = (e) => {
    const imageArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setSchadeFotos((prevImages) =>
      prevImages.concat(imageArray)
    );
  }
  const imageOnderhoudHandler = (e) => {
    const imageArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setOnderhoudFotos((prevImages) =>
      prevImages.concat(imageArray)
    );
  }
  const imageInspectieHandler = (e) => {
    const imageArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setInspectieFotos((prevImages) =>
      prevImages.concat(imageArray)
    );
  }
  const imageInvHandler = (e) => {
    const imageArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setInvFotos((prevImages) =>
      prevImages.concat(imageArray)
    );
  }
  const removeSchadeImage = (imageUrl) => {
    setSchadeFotos((prevImages) => prevImages.filter(image => image !== imageUrl));
  };
  const removeOnderhoudImage = (imageUrl) => {
    setOnderhoudFotos((prevImages) => prevImages.filter(image => image !== imageUrl));
  };
  const removeInspectieImage = (imageUrl) => {
    setInspectieFotos((prevImages) => prevImages.filter(image => image !== imageUrl));
  };
  const removeInvImage = (imageUrl) => {
    setInvFotos((prevImages) => prevImages.filter(image => image !== imageUrl));
  };
  const { mutate: editMutation } = useMutation({
    mutationFn: editInspection,
    onSuccess: () => {
      toast.success('Inspectie Ingevuld!');
      navigate('/app/inspecties');
    },
  });

  const submitForm = (e) => {
    e.preventDefault();
    const editInspectie = {
      id,
      adres: inspectie.adres,
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
      },
      Onderhoud: {
        onderhoudGemeld,
        onderhoudLocatie,
        onderhoudSoort,
        onderhoudAcuut,
        onderhoudPrijs,
        onderhoudFotos,
      },
      Inspectie: {
        inspectieGemeld,
        inspectieLocatie,
        inspectieSoort,
        inspectieStoring,
        inspectieProcedure,
        inspectieGoedgekeurd,
        inspectieOpmerking,
        inspectieFotos
      },
      Inventarisatie: {
        inventarisatieGemeld,
        invSituatie,
        invLocatie,
        invUitvoerder,
        invBeschrijving,
        invActie,
        invOpmerking,
        invFotos
      }
    };
    editMutation(editInspectie);
  }
  
  const [inventarisatieGemeld, setInventarisatieGemeld] = useState(false);
  const [onderhoudGemeld, setOnderhoudGemeld] = useState(false);
  const [schadeGemeld, setSchadeGemeld] = useState(false);
  const [inspectieGemeld, setInspectieGemeld] = useState(false);

  useEffect(() => {
    if (inspectie) {
        setInventarisatieGemeld(inspectie.Inventarisatie.inventarisatieGemeld === true);
        setOnderhoudGemeld(inspectie.Onderhoud.onderhoudGemeld === true);
        setSchadeGemeld(inspectie.Schade.schadeGemeld === true);
        setInspectieGemeld(inspectie.Inspectie.inspectieGemeld === true);
    }
  }, [inspectie]);



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }


  return (
    <div>
      <h2 className="text-rec-blue text-xl font-semibold ">Inspectie: {inspectie.id}</h2>
      <div className='text-start mt-4 border-b-2 '>
        <p>Inspectie ID:<span className='font-semibold'>{inspectie.id}</span></p>
        <p>Datum aangemeld: <span className='font-semibold'>{inspectie.datum}</span></p>
        <p className='mb-3'>Adres: <span className='font-semibold'>{inspectie.adres}</span></p>
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
            <input type="checkbox" id="onderhoud" name="onderhoud" className='mr-2'
              checked={onderhoudGemeld}
              onChange={onderhoudCheckHandler} />
            <label htmlFor="onderhoud">Onderhoud</label>
          </div>
          <div>
            <input type="checkbox" id="inspectie" name="inspectie" className='mr-2'
              checked={inspectieGemeld}
              onChange={inspectieCheckHandler} />
            <label htmlFor="inspectie">Inspectie</label>
          </div>
          <div>
            <input type="checkbox" id="inventarisatie" name="inventarisatie" className='mr-2'
              checked={inventarisatieGemeld}
              onChange={inventarisatieCheckHandler} />
            <label htmlFor="inventarisatie">Inventarisatie</label>
          </div>
        </fieldset>
        {schadeGemeld ? <SchadeForm
          schadeNieuw={schadeNieuw} handleSchadeNieuw={handleSchadeNieuw}
          schadeLocatie={schadeLocatie} handleSchadeLocatie={handleSchadeLocatie}
          schadeAcuut={schadeAcuut} handleSchadeAcuut={handleSchadeAcuut}
          schadeSoort={schadeSoort} handleSchadeSoort={handleSchadeSoort}
          schadeOmschrijving={schadeOmschrijving} handleSchadeOmschrijving={handleSchadeOmschrijving}
          schadeFotos={schadeFotos}
          schadeDatum={schadeDatum} handleSchadeDatum={handleSchadeDatum}
          imageSchadeHandler={imageSchadeHandler} removeSchadeImage = {removeSchadeImage}
        /> : <></>}
        {onderhoudGemeld ? <OnderhoudForm
          onderhoudLocatie={onderhoudLocatie} handleOnderhoudLocatie={handleOnderhoudLocatie}
          onderhoudSoort={onderhoudSoort} handleOnderhoudSoort={handleOnderhoudSoort}
          onderhoudAcuut={onderhoudAcuut} handleOnderhoudAcuut={handleOnderhoudAcuut}
          onderhoudPrijs={onderhoudPrijs} handleOnderhoudPrijs={handleOnderhoudPrijs}
          onderhoudFotos={onderhoudFotos}
          imageOnderhoudHandler={imageOnderhoudHandler} removeOnderhoudImage = {removeOnderhoudImage}
        /> : <></>}

        {inspectieGemeld ? <InspectieForm
          inspectieLocatie={inspectieLocatie} handleInspectieLocatie={handleInspectieLocatie}
          inspectieSoort={inspectieSoort} handleInspectieSoort={handleInspectieSoort}
          inspectieStoring={inspectieStoring} handleInspectieStoring={handleInspectieStoring}
          inspectieProcedure={inspectieProcedure} handleInspectieProcedure={handleInspectieProcedure}
          inspectieGoedgekeurd={inspectieGoedgekeurd} handleInspectieGoedgekeurd={handleInspectieGoedgekeurd}
          inspectieOpmerking={inspectieOpmerking} handleInspectieOpmerking={handleInspectieOpmerking}
          inspectieFotos={inspectieFotos}
          imageInspectieHandler={imageInspectieHandler} removeInspectieImage = {removeInspectieImage}
        /> : <></>}

        {inventarisatieGemeld ? <InventarisatieForm
          invSituatie={invSituatie} handleInvSituatie={handleInvSituatie}
          invLocatie={invLocatie} handleInvLocatie={handleInvLocatie}
          invUitvoerder={invUitvoerder} handleInvUitvoerder={handleInvUitvoerder}
          invBeschrijving={invBeschrijving} handleInvBeschrijving={handleInvBeschrijving}
          invActie={invActie} handleInvActie={handleInvActie}
          invOpmerking={invOpmerking} handleInvOpmerking={handleInvOpmerking}
          invFotos={invFotos}
          imageInvHandler={imageInvHandler} removeInvImage = {removeInvImage}
        /> : <></>}

        <button type="submit" className="border-[1px]  border-rec-blue h-10 w-2/3 m-auto rounded-lg mt-4 font-medium">Versturen</button>
      </form>
    </div>
  );
};

export default InspectiePage;

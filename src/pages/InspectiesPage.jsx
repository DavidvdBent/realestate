import React from 'react'
import Inspecties from '../components/Inspecties'

const InspectiesPage = () => {
  return (
    <div>
        <div>
          <h2 className="text-rec-blue text-xl font-semibold font-montserrat mb-4">Toegewezen Inspecties</h2>
        </div>
        <Inspecties/>
    </div>
  )
}

export default InspectiesPage

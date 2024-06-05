import axios from "axios";

export function getNewInspections () {
    return axios
        .get('http://localhost:5000/inspecties').then(res => {
            // Only New Inspections
            res.data = res.data.filter((inspectie) => inspectie.nieuw === true)
            // Sort by Date (Old First)
            return res.data = res.data.sort((a,b) => {
                const datumA = Date.parse(a.datum)
                const datumB = Date.parse(b.datum)
                if (datumA < datumB) {
                    return -1;
                  }
                  if (datumA > datumB) {
                    return 1;
                  }
                  return 0;
               
            })
        })    
}
export function getOldInspections () {
    return axios
        .get('http://localhost:5000/inspecties').then(res => {
            // Only Old Inspections
            res.data = res.data.filter((inspectie) => inspectie.nieuw === false)
            // Sort by Date (New First)
            return res.data = res.data.sort((a,b) => {
                const datumA = Date.parse(a.datum)
                const datumB = Date.parse(b.datum)
                if (datumA < datumB) {
                    return 1;
                  }
                  if (datumA > datumB) {
                    return -1;
                  }
                  return 0;      
            })
        })    
}
export function getInspection (id) {
  return axios
    .get(`http://localhost:5000/inspecties/${id}`).then(res => res.data)    
}

export function editInspection (editInspectie) {
  return axios
    .patch(`http://localhost:5000/inspecties/${editInspectie.id}`, editInspectie) 
}

export function getAllInspections () {
  return axios
        .get('http://localhost:5000/inspecties').then(res => res.data )
}

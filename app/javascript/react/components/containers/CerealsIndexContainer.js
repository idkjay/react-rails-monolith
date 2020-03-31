import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import CerealTile from "./CerealTile"

const CerealsIndexContainer = props => {
  const [cereals, setCereals] = useState([])

  useEffect(() => {
    fetch('/api/cereals')
      .then(response => {
        if(response.ok) {
          return response
        } else {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
      })
      .then(validatedResponse => validatedResponse.json())
      .then(body => {
        setCereals(body.cereals)
      })
      .catch(error => {
        console.log(`Error fetching cereal list: ${error.message}`)
      })
  }, [])

  const cerealTiles = cereals.map(cereal => {
    return(
      <div>
          <CerealTile
            key={cereal.id}
            cerealData={cereal}
          />
      </div>
    )
  })

  return(
    <div>
      <h2>All Cereals:</h2>
      <ul>
        {cerealTiles}
      </ul>
    </div>
  )
}

export default CerealsIndexContainer
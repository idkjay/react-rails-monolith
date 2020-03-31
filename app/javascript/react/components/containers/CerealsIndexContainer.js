import React, { useState, useEffect} from 'react'

const CerealsIndexContainer = (props) => {
    const [ cereals, setCereals ] = useState([])

    useEffect(() => {
        fetch('/api/cereals')
            .then(response => {
                if (response.ok) {
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
            <li key={cereal.id}>
                <p>
                    Name: {cereal.name} <br/>
                    Description: {cereal.description}
                </p>
            </li>
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
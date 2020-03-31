import React, { useState, useEffect } from 'react'
import CerealShow from "./CerealShow"


const CerealsShowContainer = (props) => {
    const [ cerealInfo, setCerealInfo ] = useState({})
    let cerealId = props.match.params.id

    useEffect(() => {
        fetch(`/api/cereals/${cerealId}`)
            .then(response => {
                if (response.ok) {
                    return response
                } else {
                    throw new Error(`${response.status}: ${response.statusText}`)
                }
            })
            .then(validatedResponse => validatedResponse.json())
            .then(body => {
                setCerealInfo(body.cereal)
            })
            .catch(error => {
                console.log(`Error fetching cereal list: ${error.message}`)
            })
    }, [])



    return(
        <div>
            <CerealShow
                cerealInfo={cerealInfo}
            />
        </div>
    )
}

export default CerealsShowContainer
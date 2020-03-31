import React, { useState, useEffect } from 'react'
import CerealShow from "./CerealShow"

const CerealsShowContainer = (props) => {
    const [ cerealInfo, setCerealInfo ] = useState({})
    let cerealId = props.match.params.id

    useEffect(() => {
        fetch(`/api/cereals/${cerealId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    const error = new Error(`${response.status}: ${response.statusText}`);
                    throw (error)
                }
            })
            .then(body => {
                setCerealInfo(body.cerealInfo)
            })
            .catch(error => console.error(`Error in fetch: ${error.message}`));
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
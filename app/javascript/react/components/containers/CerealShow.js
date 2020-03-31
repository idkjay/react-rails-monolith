import React from 'react'

const CerealShow = ({ cerealInfo }) => {
    let { id, name, description } = cerealInfo

    return(
        <p>
            <span><strong>Name: </strong>{name}</span><br/>
            <span><strong>Description: </strong>{description}</span>
        </p>
    )
}

export default CerealShow
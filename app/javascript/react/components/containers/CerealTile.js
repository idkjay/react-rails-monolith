import React from 'react'
import { Link } from "react-router-dom"

import CerealsShowContainer from "./CerealsShowContainer"

const CerealTile = ({ cerealData }) => {
    let { id, name, description } = cerealData

    return( 
        <div>
            <Link to={`/cereals/${id}`}>
                <li>
                    <p>
                    <span><strong>Name: </strong>{name}</span><br/>
                    <span><strong>Description: </strong>{description}</span>
                    </p>
                </li>
            </Link>
        </div>
    )
}

export default CerealTile
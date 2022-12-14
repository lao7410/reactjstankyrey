import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Card from "../../components/card";
import './styles.css'

const Pokemon = () => {
    const params = useParams();
    const {state} = useLocation();

    
    return (
        <div>
            <Card item={state} />
        </div>
    )
}

export default Pokemon;
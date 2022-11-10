import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Tarjeta from "../../components/tarjeta";
import './style.css';

const Detalle = () => {
    const params = useParams();
    const {state} = useLocation();
    return (
        <div>
            <h1>Detalle</h1>
            <Tarjeta item={state}/>
        </div>
    )
}
export default Detalle;
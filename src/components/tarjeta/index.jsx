import React from "react";
import { useNavigate} from "react-router-dom";
import './styles.css';

const Tarjeta = ({ item }) => {
    const { id, nombre, image, type} = item;
    const navigate = useNavigate;
    const handleDetail = () => {
        navigate ('/detalle/${id}');
    }
    return (
        <div onClick={handleDetail} className="card">
            <div className="card-image-container">
                <img className="card-image" src={image} alt={item.nombre} />
                </div>
                <div className="card-content">
                    <p className="card-name">{nombre}</p>
                    <p className="card-type">{type}</p>
                    <p className="card-id">#{id}</p>
            </div>
        </div>
    )
};

export default Tarjeta;
import React, { useEffect, useRef, useState } from "react";
import Tarjeta from "../../components/tarjeta";
import './style.css';

const Home = () => {
    const [objetos, setObjetos] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const inicioObjeto = useRef(1);
    const finObjeto = useRef(12);

    const getObjetos = async (start = '1', end = '12') => {
        try {
            setIsLoading(true);
            const promises = [];
            for (let i = start; i <= end; i++) {
                promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));

            }
            const results = await Promise.all(promises);
            const newObjetos = results.map((objeto) => {
                const paddedIndex = ('00' + objeto.id).slice(-3);
                const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
                const types = objeto.types.map(type => type.type.name).join(', ');

                return {
                    id: objeto.id,
                    nombre: objeto.name,
                    image,
                    type: types,
                }
            });
            setObjetos(newObjetos);

        } catch (error) {
            console.log(error)

        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getObjetos(inicioObjeto.current, finObjeto.current);
    }, []);

    const handleNext= async () => {
        inicioObjeto.current += 12;
        finObjeto.current += 12;
        getObjetos (inicioObjeto.current,finObjeto.current);
    }

    const handlePreview = async ()=>{
        inicioObjeto.current -=12;
        finObjeto.current -=12;
        getObjetos(inicioObjeto.current,finObjeto.current)
    }
    console.log('objetos', objetos)

    return (
        <div>
            <h1>HOME</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className="list-container">
                        {objetos.map(objeto => (
                            <Tarjeta key={objeto.id} item={objeto} />
                        ))}
                    </div>
                    <div className="button-container">
                        <button disabled={inicioObjeto.current  <=1} onClick={handlePreview} >ANTERIOR</button>
                        <button disabled={inicioObjeto.current  >=48}onClick={handleNext}>SIGUIENTE</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Home;
import React,{useState} from 'react';
import PropTypes from 'prop-types';


const ComponentB = (estado) => {

   const [conectado, setConectado] = useState(estado);
    return (
        <div>
            <h2>{ conectado === false ?'Contacto no disponible' :'Contacto en linea' }</h2>
            <button onClick={ ()=> setConectado(!conectado)}>  { conectado === true ?'Conectado' :'Desconectado' } </button>
        </div>
    );
};


ComponentB.propTypes = {
    estado:PropTypes.bool,
};


export default ComponentB;

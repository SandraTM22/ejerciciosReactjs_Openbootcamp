// creamos el componente con RFC react function component con propstypes
import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto';
import ComponentB from './componentB';


const ContactoComponent = ({ contacto }) => {
    return (
        <div>
            <h2>Nombre : { contacto.nombre }</h2>
            <h2>Apellidos : { contacto.apellidos }</h2>
            <h2>Email : { contacto.email }</h2>
            {/* <h2>Este contacto está : { contacto.conectado ?'Contacto En Línea' :'Contacto No Disponible' }</h2> */}
            <ComponentB estado={true}></ComponentB>        
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto:PropTypes.instanceOf(Contacto),
};


export default ContactoComponent;

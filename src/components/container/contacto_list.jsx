// Este componente va a renderizar a contacto.jsx
import React from 'react';
import { Contacto } from '../../models/contacto';
import ContactoComponent from '../pure/contacto'


const ContactoListComponent = () => {

    const defaultContact = new Contacto ('Sandra','De la torre','exameple@example.es',false);

    return (
        <div>
            <div>
                <h1>Contacto:</h1>
                <ContactoComponent contacto={ defaultContact }></ContactoComponent>
            </div>
        </div>
    );
};



export default ContactoListComponent;

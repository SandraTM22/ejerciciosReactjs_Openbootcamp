// creamos el componente con RFC react function component con propstypes
import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';

const ContactComponent = ({ contact, change, remove }) => {

    function statusIcon() {
        if(contact.userStatus)
           return (<i onClick={() => change(contact)} className='bi bi-chat-text-fill ' style={{color:'green'}}></i>)            
        else
            return (<i onClick={() => change(contact)} className='bi bi-chat-text-fill ' style={{color:'hsl(0, 100%, 40%)'}}></i>)
    }
    return (    
            <tr>
                <td>{ contact.name }</td>
                <td>{ contact.lastName }</td>
                <td className='hidden' >{ contact.email }</td>
                <td>
                    {statusIcon()}
                    <i onClick={() => remove(contact) } className='bi-trash' style={{color:'hsl(0, 100%, 40%)'}}></i>
                </td>              
                
            </tr> 
            
    );
};


ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact).isRequired,
    change:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired,
};


export default ContactComponent;

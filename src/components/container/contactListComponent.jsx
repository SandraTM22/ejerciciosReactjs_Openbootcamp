// Este componente va a renderizar a contacto.jsx
import React, { useState } from 'react';
import { Contact } from '../../models/contact';
import ContactComponent from '../pure/contactComponent'
import ContactFormComponent from '../pure/forms/contactFormComponent';
import './../../style.scss'


const ContactListComponent = () => {
    
    const defaultContact1 = new Contact ('Sandra','De la torre','exameple@example.es',false);
    const defaultContact2 = new Contact ('Oscar','Nevado','exameple@example.es',true);
    const [contacts, setContacts] = useState([defaultContact1,defaultContact2]);

    function changeStatus(contact) {
        //Find index
        const index = contacts.indexOf(contact);
        //Save temporal array
        const tempContacts = [...contacts];
        //Change status
        tempContacts[index].userStatus = !tempContacts[index].userStatus;
        setContacts(tempContacts);
    }

    function removeContact(contact) {
        //Find index
        const index = contacts.indexOf(contact);
        //Save temporal array
        const tempContacts = [...contacts];
        //remove contact
        tempContacts.splice(index,1)
        setContacts(tempContacts);
    }

    function addNewContact(newContact) {
        //Save temporal array
        const tempContacts = [...contacts];
        tempContacts.push(newContact);
        setContacts(tempContacts);
    }


    return (
        <div>        
            <h1 className='text-center'><em>Contacts</em></h1>
                <table id="contactList" className=" table table-responsive table-hover">
                    <thead>
                        <tr>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col' className="hidden" >Email</th>
                            <th scope='col'>Estate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact,index) =>{
                                return (
                                    <ContactComponent
                                        key={index}
                                        contact={contact}
                                        userStatus = {contact.userStatus}
                                        change = {changeStatus}
                                        remove ={removeContact}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            <ContactFormComponent
                add = {addNewContact}
            />    
        </div>
    );
};



export default ContactListComponent;

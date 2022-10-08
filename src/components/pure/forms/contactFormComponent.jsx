import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact';


const ContactFormComponent = ( {add} ) => {

    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        )
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='p-2 mt-2 shadow p-3 rounded'>
        <legend>New Contact:</legend>
        <div className="form-group row mt-2">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-8">
                <input ref={nameRef} type="text" className="form-control" id="inputName" placeholder="Name"/>
            </div>
        </div>
        <div className="form-group row mt-2">
            <label htmlFor="inputLastName" className="col-sm-2 col-form-label">LastName</label>
            <div className="col-sm-8">
                <input ref={lastNameRef} type="text" className="form-control" id="inputLastName" placeholder="LastName"/>
            </div>
        </div>
        <div className="form-group row mt-2">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-8">
                <input ref={emailRef} type="email" className="form-control" id="inputEmail" placeholder="Email"/>
            </div>
        </div>
        
        <button type='submit' className='btn btn-success mt-2'> Save </button>            
    </form>
    );
};


ContactFormComponent.propTypes = {
    add:PropTypes.func.isRequired,
};


export default ContactFormComponent;

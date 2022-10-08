import React,{useState} from 'react';
import PropTypes from 'prop-types';


const StatusComponent = (userStatus) => {

   const [statusState, setStatus] = useState(userStatus);
    return (
        <td>
            <i class="bi bi-chat-text-fill"></i> { statusState === true ?'Online' :'Offline' }
            <button onClick={ ()=> setStatus(!statusState)}>  { statusState === true ?'Off' :'On' } </button>
        </td>
    );
};


StatusComponent.propTypes = {
    userStatus:PropTypes.bool,
};


export default StatusComponent;

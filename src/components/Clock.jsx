import React, { useEffect, useState } from 'react';

const Clock = () => {

    const defaultState = {
        fecha : new Date(),
        nombre : 'Sandra',
        apellidos : 'De la torre',
        edad : 0
    }
    const [user, setUser] = useState(defaultState);

    

    useEffect(() => {

        const timerID = setInterval(() => {
            tick()
        }, 1000);

        const tick = ()=>{
            return setUser ({
                fecha : user.fecha,
                edad : user.edad +1 ,
                nombre : user.nombre,
                apellidos : user.apellidos
            })
        }

        return () => {
            clearInterval(timerID);
        };
    });

    
   
    return (
        <div>
            <h2> Hora Actual: {user.fecha.toLocaleTimeString()} </h2>
            <h3>{user.nombre} {user.apellidos}</h3>
            <h1>Edad: {user.edad}</h1>
        </div>
    );
}

export default Clock;

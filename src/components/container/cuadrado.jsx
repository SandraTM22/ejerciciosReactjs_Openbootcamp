import React, { useState } from 'react';
import './../../style.scss'

const Cuadrado = () => {

    const [color, setColor] = useState('000000');
    const [change, setChange] = useState(0);

    const generateColor = () =>{
        setColor(Math.random().toString(16).substr(-6));
        // Substr only catch the last 6 numbers
    }

    const clear = () => {
        clearInterval(change)
    }

    const ChangeColor = () => {
        setChange(setInterval(generateColor,500))
    }

    return (
        <div className='cuadrado'
            style={{backgroundColor: "#" + color}}     onMouseEnter={ChangeColor}
            onMouseLeave={clear}
            onDoubleClick={clear}>            
        </div>
    );
}



export default Cuadrado;

import React from 'react';
import { useState } from 'react';


const Increment = () => {



    const [number, setnumber] = useState(0)


    const Addition = () =>{
    
        setnumber(number+1)
    }


    return (
        <div >

        <button onClick={Addition} type="button" className="btn btn-primary ">+</button>
        <label>{number}</label>
        </div>
    );
};

export default Increment;
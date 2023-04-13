import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


function Description(props){
    const[descInput, setDesc] = useState('');

    function handleDesc(event){
        setDesc(event.target.value);
        props.onChange(event.target.value);
    }

    useEffect(() => {
        setDesc(props.value);
      }, [props.value]);

      
    return (
        <div>
            <label htmlFor='descriptionBet' className='text-white mb-2'>Descrição da aposta</label>
            
            <div className="form-floating">
                <textarea className="form-control input_descriptionBet" placeholder="Descrição" id="descriptionBet" value={descInput} onChange={handleDesc}></textarea>
                <label htmlFor="descriptionBet">Descrição</label>
            </div>        
        </div>
    );
};

export default Description;

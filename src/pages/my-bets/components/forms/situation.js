import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


function Situation(props){
    const [situInput, setSitu] = useState('');

    function handleSitu(event){
        setSitu(event.target.value);
        props.onChange(event.target.value);
    }

    useEffect(() => {
        setSitu(props.value);
      }, [props.value]);



    return (
        <div>
            <label htmlFor='situationBet' className='text-white mb-2'>Situação</label>
            
            <select className="form-select input_situationBet" id='situationBet' defaultValue='situation-select' value={situInput} onChange={handleSitu}>
                <option value='0'>Situação</option>
                <option value="Ganho">Ganho</option>
                <option value="Pendente">Pendente</option>
                <option value="Perdida">Perdida</option>
            </select>      
        </div>
    );
};

export default Situation;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


const Situation = () => {

    return (
        <div>
            <label htmlFor='situationBet' className='text-white mb-2'>Situação</label>
            
            <select className="form-select input_situationBet" id='situationBet' defaultValue='situation-select'>
                <option value='0' >Situação</option>
                <option value="1">Ganho</option>
                <option value="2">Pendente</option>
                <option value="3">Perdida</option>
            </select>      
        </div>
    );
};

export default Situation;

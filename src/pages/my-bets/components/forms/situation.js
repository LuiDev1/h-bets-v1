import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


const Situation = () => {

    return (
        <div>
            <label for='situationBet' className='text-white mb-2'>Situação</label>
            
            <select class="form-select" id='situationBet'>
                <option selected>Situação</option>
                <option value="1">Ganho</option>
                <option value="2">Pendente</option>
                <option value="3">Perdida</option>
            </select>      
        </div>
    );
};

export default Situation;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


const Date = () => {

    return (
        <div>
            <label for='descriptionBet' className='text-white mb-2'>Data da aposta</label>
            
            <div class="form-floating">
                <input type="datetime-local" className="form-control input_dateBet" id="datetimepicker" name="datetimepicker" />
                <label for="descriptionBet">Data</label>
            </div>        
        </div>
    );
};

export default Date;

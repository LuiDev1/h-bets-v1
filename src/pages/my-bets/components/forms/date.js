import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


const Date = () => {

    return (
        <div>
            <label htmlFor='descriptionBet' className='text-white mb-2'>Data da aposta</label>
            
            <div className="form-floating">
                <input type="datetime-local" className="form-control input_dateBet" id="datetimepicker" name="datetimepicker" />
                <label htmlFor="descriptionBet">Data</label>
            </div>        
        </div>
    );
};

export default Date;

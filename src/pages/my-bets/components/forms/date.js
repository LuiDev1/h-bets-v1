import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


function Date(props){
    const[dateInput, setDate] = useState('');

    function handleDate (event){
        setDate(event.target.value);
        props.onChange(event.target.value);
    }

    useEffect(() => {
        setDate(props.value);
      }, [props.value]);
      

    return (
        <div>
            <label htmlFor='descriptionBet' className='text-white mb-2'>Data da aposta</label>
            <div className="form-floating">
                <input type="datetime-local" className="form-control input_dateBet" id="datetimepicker" name="datetimepicker" value={dateInput} onChange={handleDate}/>
                <label htmlFor="descriptionBet">Data</label>
            </div>        
        </div>
    );
};

export default Date;

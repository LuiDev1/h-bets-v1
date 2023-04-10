import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


const Description = () => {

    return (
        <div>
            <label htmlFor='descriptionBet' className='text-white mb-2'>Descrição da aposta</label>
            
            <div className="form-floating">
                <textarea className="form-control input_descriptionBet" placeholder="Descrição" id="descriptionBet"></textarea>
                <label htmlFor="descriptionBet">Descrição</label>
            </div>        
        </div>
    );
};

export default Description;

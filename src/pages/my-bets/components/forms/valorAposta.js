import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


function ValorAposta(props){
    const [valor, setValor] = useState('');

    useEffect(() => {
        setValor(props.value);
      }, [props.value]);


    const handleInputChange = (event) => {

        // CONVERSÃO PARA REAL
        const valor = (Number(event.target.value.replace(/\D/g, '')) / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        setValor(valor);
        props.onChange(valor);
    }
    // //

    return (

        <div>

            <label htmlFor='value-ph' className='text-white mb-2'>Valor da aposta</label>
            <div className="input-group mb-3">
                <span className="input-group-text">R$</span>
                <div className="form-floating">
                    <input type="text" className="form-control input_valorApostado" id="value-ph" placeholder="Valor" value={valor} onChange={handleInputChange}/>
                        <label htmlFor="value-ph">Valor</label>
                </div>
            </div>
        </div>
    );
};

export default ValorAposta;

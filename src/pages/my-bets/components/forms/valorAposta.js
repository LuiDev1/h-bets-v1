import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


const ValorAposta = () => {


    // FORMATAÇÃO DA MOEDA INPUT VALOR DA APOSTA
    const [valor, setValor] = useState('');


    const formatarMoeda = (valor) => {
        return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    const handleInputChange = (event) => {
        let value = event.target.value;

        // remove todos os caracteres que não são dígitos
        value = value.replace(/\D/g, '');

        // divide o valor em centavos e reais
        let cents = value.slice(-2);
        let reais = value.slice(0, -2);

        // adiciona vírgula como separador de milhares
        reais = reais.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        // concatena os valores
        let novoValor = reais + ',' + cents;

        setValor(formatarMoeda(novoValor));
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

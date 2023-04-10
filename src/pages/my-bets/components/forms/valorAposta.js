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

            <label for='value-ph' className='text-white mb-2'>Valor da aposta</label>
            <div class="input-group mb-3">
                <span class="input-group-text">R$</span>
                <div class="form-floating">
                    <input type="text" class="form-control input_valorApostado" id="value-ph" placeholder="Valor" value={valor} onChange={handleInputChange}/>
                        <label for="value-ph">Valor</label>
                </div>
            </div>
        </div>
    );
};

export default ValorAposta;

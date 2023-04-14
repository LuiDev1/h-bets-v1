// IMPORTAÇÕES
import React, { useState, useEffect } from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../../css/style.css';

// INICIO DA FUNÇÃO PRINCIPAL
function ValorAposta(props) {

    // CRIANDO UM USESTATE PARA USAR O INPUT NO COMPONENTE PAI 
    const [valor, setValor] = useState('');


    // USEEFFECT CRIADO PARA ATUALIZAR OS INPUTS PARA VAZIO
    useEffect(() => {
        setValor(props.value);
    }, [props.value]);


    // CRIANDO O PROPS PARA ENVIAR O INPUT AO COMPONENTE PAI E CONVERTANDO O VALOR DO INPUT PARA REAL (R$)
    const handleInputChange = (event) => {

        // CONVERSÃO PARA REAL
        const valor = (Number(event.target.value.replace(/\D/g, '')) / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        setValor(valor);
        props.onChange(valor);
    }


    // RETORNANDO O INPUT PARA O COMPONENTE PAI
    return (
        <div>
            <label htmlFor='value-ph' className='text-white mb-2'>Valor da aposta</label>
            <div className="input-group mb-3">
                <span className="input-group-text">R$</span>
                <div className="form-floating">
                    <input type="text" className="form-control input_valorApostado" id="value-ph" placeholder="Valor" value={valor} onChange={handleInputChange} />
                    <label htmlFor="value-ph">Valor</label>
                </div>
            </div>
        </div>
    );
};

export default ValorAposta;

// IMPORTAÇÕES
import React, { useState, useEffect } from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../../css/style.css';

// INICIO DA FUNÇÃO PRINCIPAL
function Description(props) {

    // CRIANDO UM USESTATE PARA USAR O INPUT NO COMPONENTE PAI
    const [descInput, setDesc] = useState('');

    // CRIANDO O PROPS PARA ENVIAR O INPUT AO COMPONENTE PAI
    function handleDesc(event) {
        setDesc(event.target.value);
        props.onChange(event.target.value);
    }

    // USEEFFECT CRIADO PARA ATUALIZAR OS INPUTS PARA VAZIO
    useEffect(() => {
        setDesc(props.value);
    }, [props.value]);


    //RETORNANDO O INPUT PARA O COMPONENTE PAI
    return (
        <div>
            <label htmlFor='descriptionBet' className='text-white mb-2'>Descrição da aposta</label>
            <div className="form-floating">
                <textarea className="form-control input_descriptionBet" placeholder="Descrição" id="descriptionBet" value={descInput} onChange={handleDesc}></textarea>
                <label htmlFor="descriptionBet">Descrição</label>
            </div>
        </div>
    );
};

export default Description;

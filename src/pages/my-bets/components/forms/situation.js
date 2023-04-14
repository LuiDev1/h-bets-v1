// IMPORTAÇÕES
import React, { useState, useEffect } from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../../css/style.css';

// INICIO DA FUNÇÃO PRINCIPAL
function Situation(props){

    // CRIANDO UM USESTATE PARA USAR O INPUT NO COMPONENTE PAI
    const [situInput, setSitu] = useState('');

    // CRIANDO O PROPS PARA ENVIAR O INPUT AO COMPONENTE PAI
    function handleSitu(event){
        setSitu(event.target.value);
        props.onChange(event.target.value);
    }

    // USEEFFECT CRIADO PARA ATUALIZAR OS INPUTS PARA VAZIO
    useEffect(() => {
        setSitu(props.value);
      }, [props.value]);


    //RETORNANDO O INPUT PARA O COMPONENTE PAI
    return (
        <div>
            <label htmlFor='situationBet' className='text-white mb-2'>Situação</label>
            
            <select className="form-select input_situationBet" id='situationBet' defaultValue='situation-select' value={situInput} onChange={handleSitu}>
                <option value='0'>Situação</option>
                <option value="Ganho">Ganho</option>
                <option value="Pendente">Pendente</option>
                <option value="Perdida">Perdida</option>
            </select>      
        </div>
    );
};

export default Situation;

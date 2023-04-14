// IMPORTAÇÕES
import React, { useState, useEffect } from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../../css/style.css';

// INICIO DA FUNÇÃO PRINCIPAL
function Date(props){
    // CRIANDO UM USESTATE PARA USAR O INPUT NO COMPONENTE PAI
    const[dateInput, setDate] = useState('');

    // CRIANDO O PROPS PARA ENVIAR O INPUT AO COMPONENTE PAI
    function handleDate (event){
        setDate(event.target.value);
        props.onChange(event.target.value);
    }

    // USEEFFECT CRIADO PARA ATUALIZAR OS INPUTS PARA VAZIO
    useEffect(() => {
        setDate(props.value);
      }, [props.value]);
      

    //   RETORNANDO O INPUT PARA O COMPONENTE PAI
    return (
        <div>
            <label htmlFor='descriptionBet' className='text-white mb-2'>Data da aposta</label>
            <div className="form-floating">
                <input type="date" className="form-control input_dateBet" id="datetimepicker" name="datetimepicker" value={dateInput} onChange={handleDate}/>
                <label htmlFor="descriptionBet">Data</label>
            </div>        
        </div>
    );
};

export default Date;

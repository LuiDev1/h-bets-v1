// IMPORTAÇÕES
import React, { useState, useEffect } from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../../css/style.css';

// INCIO DA FUNÇÃO PRINCIPAL
function Sportsbook(props){

    // CRIANDO UM USESTATE PARA USAR O INPUT NO COMPONENTE PAI 
    const [bookInput, setBook] = useState('');

    // CRIANDO O PROPS PARA ENVIAR O INPUT AO COMPONENTE PAI
    function handleBook(event){
        setBook(event.target.value);
        props.onChange(event.target.value);
    }

    // USEEFFECT CRIADO PARA ATUALIZAR OS INPUTS PARA VAZIO
    useEffect(() => {
        setBook(props.value);
    }, [props.value]);
    
    //RETORNANDO O INPUT PARA O COMPONENTE PAI
    return (
        <div>
            <label htmlFor='sportsbook' className='text-white mb-2'>Casa de aposta</label>
            <select className="form-select input_Sportsbook" id='sportsbook' defaultValue="sportsbook-select" value={bookInput} onChange={handleBook}>
                <option value='0' >Casa de aposta</option>
                <option value="Bet365">Bet365</option>
                <option value="Sportingbet">Sportingbet</option>
                <option value="BetFair">Betfair</option>
                <option value="Betano">Betano</option>
                <option value="1xBet">1xBet</option>
                <option value="Betway">Betway</option>
                <option value="Rivalo">Rivalo</option>
                <option value="Betboo">Betboo</option>
                <option value="188Bet">188Bet</option>
                <option value="NetBet">NetBet</option>
                <option value="Outro">Outro</option>
            </select>
        </div>
    );
};

export default Sportsbook;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


function Sportsbook(props){
    const [bookInput, setBook] = useState('');

    function handleBook(event){
        setBook(event.target.value);
        props.onChange(event.target.value);
    }

    useEffect(() => {
        setBook(props.value);
      }, [props.value]);

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

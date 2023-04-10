import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/style.css';


const Sportsbook = () => {

    return (
        <div>
            <label for='sportsbook' className='text-white mb-2'>Casa de aposta</label>
            <select className="form-select input_Sportsbook" id='sportsbook'>
                <option selected>Casa de aposta</option>
                <option value="1">Bet365</option>
                <option value="2">Sportingbet</option>
                <option value="3">Betfair</option>
                <option value="4">Betano</option>
                <option value="5">1xBet</option>
                <option value="6">Betway</option>
                <option value="7">Rivalo</option>
                <option value="8">Betboo</option>
                <option value="9">188Bet</option>
                <option value="10">NetBet</option>
                <option value="11">Outro</option>
            </select>
        </div>
    );
};

export default Sportsbook;

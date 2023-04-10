import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/style.css';

import ValorBet from './forms/valorAposta'
import Sportsbook from './forms/sportsbook';
import DescriptionBet from './forms/description'
import Date from './forms/date'
import Situation from './forms/situation'
import Odd from './forms/odd'

const ValorAposta = () => {

    return (
        <div className='container-forms d-flex flex-column h-50 align-items-stretch gap-4 mt-5'>
            <div className='text-center'>
                <h3 className='text-white fs-4'>Adicionar Aposta</h3>
            </div>

            <div className='group-addBet d-flex gap-4'>
                <ValorBet />
                <Sportsbook />
            </div>

            <div className='group-addBet d-flex gap-4'>
                <DescriptionBet />
                <Date />
            </div>

            <div className='group-addBet d-flex gap-4'>
                <Situation />
                <Odd />
            </div>
        </div>
    );
};

export default ValorAposta;

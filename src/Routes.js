import React from 'react';

import Home from './pages/home';

import Mybets from './pages/my-bets'

import Rendimentos from './pages/rendimentos'

import Ajuda from './pages/ajuda'

import { Routes, Route } from 'react-router-dom';

const rout = () =>{

    return(
        <Routes>

            <Route exact path="/"  element={<Home />} />

            <Route exact path="/minhas-apostas"  element={<Mybets />} />

            <Route exact path="/rendimentos"  element={<Rendimentos />} />

            <Route exact path="/help"  element={<Ajuda />} />






        </Routes>
    );

}

export default rout;


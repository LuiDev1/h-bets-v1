import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/style.css'


const site = {
    name: "Heatly Bets"
}


const Parallax = () => {
    return (
        <section>

            {/* CONTAINER DO PARALLAX 1 (PLANILHAS) */}
            <div className="container-main d-flex align-items-center">
                <div className="parallax-world-of-ugg">
                    <section>
                        <div class="parallax-one">
                            <h2>Planilhas</h2>
                        </div>

                    </section>
                </div>

                {/* INFORMAÇÕES DO PARALLAX 1 */}
                <div className="container-about">
                    <h3 className="fs-1">Contabilize suas apostas</h3>
                    <ul className="mb-5">
                        <li>Analise seu lucro e/ou perda</li>
                        <li>Contabilize os gastos a quantidade de apostas feitas</li>
                        <li>Planilhe com mais rapidez e segurança</li>
                        <li>Analise seu lucro e/ou perda</li>
                    </ul>
                    <p className="link-site text-primary fs-3">Assine o {site.name}</p>
                </div>
            </div>

            {/* CONTAINER DO PARALLAX 2 (VICIOS) */}
            <div className='container-vicios d-flex flex-row-reverse'>
                <div className="parallax-world-of-ugg">
                    <section>
                        <div class="parallax-two">
                            <h2>Orientação contra vicios</h2>
                        </div>

                    </section>
                </div>

                {/* INFORMAÇÕES DO PARALLAX 2 */}
                <div className="container-main vicios d-flex align-items-center mt-2">
                    <div className="container-about2">
                        <h3 className="fs-1">Orientação contra vicios</h3>
                        <ul className="mb-5">
                            <li>Maneiras seguras de apostar</li>
                            <li>Orientações contra dividas</li>
                            <li>Indicações</li>
                        </ul>
                        <p className="link-site text-primary fs-3">Assine o {site.name}</p>
                    </div>
                </div>
            </div>

            {/* CONTAINER DO PARALLAX 3 - PERFIL */}
            <div className="container-main d-flex align-items-center">
                <div className="parallax-world-of-ugg">
                    <section>
                        <div class="parallax-three">
                            <h2>Perfil</h2>
                        </div>

                    </section>
                </div>

                {/* INFORMAÇÕES DO PARALLAX 3 */}
                <div className="container-about">
                    <h3 className="fs-1">Edite seu perfil</h3>
                    <ul className="mb-5">
                        <li>Indique suas casas de aposta favoritas</li>
                        <li>Compartilhe dicas com outros usuários</li>
                        <li>Compartilhe sua planilha</li>
                        <li>Adicione seus dados</li>
                    </ul>
                    <p className="link-site text-primary fs-3">Assine o {site.name}</p>
                </div>
            </div>
        </section>

    );
}

export default Parallax;

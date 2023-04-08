import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/style.css'
const site = {
    name: "Heatly Bets"
}


const Page = () => {
    return (
        <main>
            <div className="container-main d-flex align-items-center justify-content-between">
                <div id="parallax-world-of-ugg">
                    <section>
                        <div class="parallax-one">
                            <h2>Planilhas</h2>
                        </div>

                    </section>
                </div>

                <div>
                    <div className="container-about">
                        <h3 className="fs-1">Contabilize suas apostas</h3>
                        <ul className="mb-5">
                            <li>Analise seu lucro e/ou perda</li>
                            <li>Contabilise os gastos a quantidade de apostas feitas</li>
                            <li>Planilhe com mais rapides e segurança</li>
                            <li>Analise seu lucro e/ou perda</li>
                        </ul>
                        <p className="link-site text-primary fs-3">Assine o {site.name}</p>
                    </div>
                </div>
            </div>

            <div>

                <div className="container-main vicios d-flex align-items-center justify-content-between mt-2">
                    <div className="container-about2">
                        <h3 className="fs-1">Orientação contra vicios</h3>
                        <ul className="mb-5">
                            <li>Maneiras seguras de apostar</li>
                            <li>Orientações contra dividas</li>
                            <li>Indicações</li>
                        </ul>
                        <p className="link-site text-primary fs-3">Assine o {site.name}</p>
                    </div>
                    <div id="parallax-world-of-ugg">
                        <section>
                            <div class="parallax-two">
                                <h2>Orientação contra vicios</h2>
                            </div>

                        </section>
                    </div>
                </div>
            </div>

            <div className="container-main d-flex align-items-center justify-content-between">
                <div id="parallax-world-of-ugg">
                    <section>
                        <div class="parallax-three">
                            <h2>Perfil e compartilhamento</h2>
                        </div>

                    </section>
                </div>

                <div>
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
            </div>

            <section className='mt-5' id="#planos">

                <div className="demo-wrap">

                    <h2 className='fs-2 text-white'>Conheça nossos planos!</h2>
                    {/* <!-- PRICING PLANS --> */}
                    <section className="pricing-plans">
                        {/* <!-- Pricing Tables --> */}
                        <div className="pricing-tables">
                            {/* <!-- Plan Features --> */}
                            <div className="pricing-plan">
                                <h2 className="plan-title">Iniciante</h2>
                                <div className="plan-cost">
                                    <p className="plan-price">Teste</p>
                                    <p className="plan-type">7 dias</p>
                                </div>
                                <ul className="plan-features mb-3">
                                    <li>Serviço de planilhas</li>
                                    <li>Atendimento ao cliente</li>
                                    <li>Lucro ou divida mensal</li>
                                    <li>Contabilizador de apostar</li>
                                    <li>Comunidade</li>
                                </ul>

                                <a className="btn-plan" href="google.com">Escolher</a>
                            </div>
                            {/* <!-- "Basic" Plan --> */}
                            <div className="pricing-plan">
                                <h2 className="plan-title">Apostador Recorrente</h2>
                                <div className="plan-cost">
                                    <p className="plan-price">R$5</p>
                                    <span>|</span>
                                    <p className="plan-type">Mensal</p>
                                </div>
                                <ul className="plan-features mb-3">
                                    <li>Serviço de planilhas</li>
                                    <li>Atendimento ao cliente</li>
                                    <li>Lucro ou divida mensal</li>
                                    <li>Contabilizador de apostar</li>
                                    <li>Comunidade</li>
                                    <li>Bem estar financeiro (dicas sobre auto controle)</li>
                                </ul>
                                <a className="btn-plan" href="google.com">Escolher</a>
                            </div>
                            {/* <!-- "Premium" Plan --> */}
                            <div className="pricing-plan featured-plan">
                                <div className="featured-ribbon">Recomendado</div>
                                <h2 className="plan-title">Profissional</h2>
                                <div className="plan-cost">
                                    <p className="plan-price">R$12</p>
                                    <span>/</span>
                                    <p className="plan-type">3 meses</p>
                                </div>
                                <ul className="plan-features mb-3">
                                    <li>Serviço de planilhas</li>
                                    <li>Lucro ou divida mensal</li>
                                    <li>Contabilizador de apostar</li>
                                    <li>Atendimento ao cliente dedicado</li>
                                    <li>Comunidade</li>
                                    <li>Bem estar financeiro (dicas sobre auto controle)</li>
                                </ul>
                                <a className="btn-plan cta" href="google.com">Escolher</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Page;
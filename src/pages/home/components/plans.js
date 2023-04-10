import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/style.css'


// IMAGENS
import yes from './images/yes.png'
import no from './images/no.png'

const Planos = () => {
    return (
        <section className='planos mt-5' id="#planos">

            {/* TITULO DO CONTAINER */}
            <div className='title-plansContainer'>
                <h2 className='fs-2 text-white text-center'>Conheça nossos planos!</h2>
            </div>

            <div className="container-plansSection">


                {/* <!-- CONTAINER COM TODOS OS PLANOS --> */}
                <div className="d-flex flex-wrap justify-content-center">

                    {/* PLANO - INICIANTE */}
                    <div className="pricing-plan">
                        <h2 className="plan-title">Iniciante</h2>

                        {/* PREÇO DO PLANO */}
                        <div className="plan-cost">
                            <p className="plan-price">Teste</p>
                            <p className="plan-type">7 dias</p>
                        </div>

                        {/* INFORMAÇÕES DO PLANO */}
                        <ul className="plan-features mb-3 text-center d-flex justify-content-center align-items-baseline">
                            <li className='d-flex align-items-center justify-content-center'><img src={no} alt='Sim' width='18px' className='mx-2' />Comunidade</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Serviço de planilhas</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={no} alt='Sim' width='18px' className='mx-2' />Bem estar financeiro</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Atendimento ao cliente</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Lucro ou divida mensal</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={no} alt='Sim' width='18px' className='mx-2' />Contabilizador de apostar</li>
                        </ul>

                        {/* BOTÃO DE SELEÇÃO DO PLANO */}
                        <a className="btn-plan" href="google.com">Selecionar</a>
                    </div>


                    {/* <!-- PLANO - APOSTADOR RECORRENTE --> */}
                    <div className="pricing-plan">
                        <h2 className="plan-title">Apostador Recorrente</h2>


                        {/* PREÇO DO PLANO */}
                        <div className="plan-cost">
                            <p className="plan-price">R$5</p>
                            <p className="plan-type">Mensal</p>
                        </div>


                        {/* INFORMAÇÕES DO PLANO */}
                        <ul className="plan-features mb-3 text-center d-flex justify-content-center align-items-baseline">
                            <li className='d-flex align-items-center justify-content-center'><img src={no} alt='Sim' width='18px' className='mx-2' />Comunidade</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Serviço de planilhas</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Bem estar financeiro</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Atendimento ao cliente</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Lucro ou divida mensal</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Contabilizador de apostar</li>
                        </ul>

                        {/* BOTÃO DE SELEÇÃO DO PLANO */}
                        <a className="btn-plan" href="google.com">Selecionar</a>
                    </div>


                    {/* <!-- PLANO - PROFISSIONAL --> */}
                    <div className="pricing-plan featured-plan">
                        <div className="featured-ribbon">Recomendado</div>
                        <h2 className="plan-title">Profissional</h2>

                        {/* PREÇO DO PLANO */}
                        <div className="plan-cost">
                            <p className="plan-price">R$12</p>
                            <p className="plan-type">3 meses</p>
                        </div>

                        {/* INFORMAÇÕES DO PLANO */}
                        <ul className="plan-features mb-3 text-center d-flex justify-content-center align-items-baseline">
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Comunidade</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Serviço de planilhas</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Bem estar financeiro</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Atendimento ao cliente</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Lucro ou divida mensal</li>
                            <li className='d-flex align-items-center justify-content-center'><img src={yes} alt='Sim' width='18px' className='mx-2' />Contabilizador de apostar</li>
                        </ul>

                        {/* BOTÃO DE SELEÇÃO DO PLANO */}
                        <a className="btn-plan btn-recommended" href="google.com">Selecionar</a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Planos;
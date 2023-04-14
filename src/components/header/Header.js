// IMPORTAÇÕES
import React, { useState } from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
// //

import { Link } from 'react-router-dom';



// IMAGENS
import logo from './images/heathly-bets.png'
import user from './images/user.svg'
import health from './images/health.svg'
import add from './images/add.svg'
import profit from './images/profit.svg'
// //

// CSS
import './Header.css'
import '../../reset.css'
// //




function Header() {
    const [showModal, setShowModal] = useState(false);

    function handleShowModal() {
        setShowModal(true);
    }

    return (
        <header className="App-header ">

            {/* BOTÃO SANDUICHE */}
            <div>
                <input type="checkbox" id="toggle" className="toggle" />
                <label htmlFor="toggle" className="icon">
                    <div className="hamburguer"></div>
                </label>
                <ul className="menu">
                    <li>
                        <Link to="/minhas-apostas" className='d-flex align-items-center flex-column'>
                            <img src={add} alt="Segurança e Saude" width="30px" />
                            <p className='mt-1'>Adicionar</p>
                        </Link>
                    </li>

                    <li className="mt-4">
                        <Link to="/help" className='d-flex align-items-center flex-column'>
                            <img src={health} alt="Segurança e Saude" width="30px" />
                            <p className='mt-1' >Ajuda (Saúde)</p>
                        </Link>
                    </li>


                    <li className="mt-4">
                        <Link to="/rendimentos" className='d-flex align-items-center flex-column'>
                            <img src={profit} alt="Segurança e Saude" width="30px" />
                            <p className='mt-1'>Rendimentos</p>
                        </Link>
                    </li>

                    <li className="mt-4">
                        <div onClick={handleShowModal} className='button-profile d-flex align-items-center flex-column'>
                            <img src={user} alt="Segurança e Saude" width="30px" />
                            <p className='mt-1'>Perfil</p>
                        </div>
                    </li>
                </ul>
            </div>
            {/* // BOTÃO SANDUICHE */}


            {/* HEADER PADRÃO */}
            <div className="header-container d-flex justify-content-around align-items-center p-2">
                <div>
                    <Link to="/"><img src={logo} className='user-logo' alt="logo cabeçalho" width='180px' /></Link>
                </div>

                <div className="ul-headerItems">
                    <ul className='d-flex gap-5'>
                        <li>
                            <Link to="/minhas-apostas" className='d-flex align-items-center flex-column'>
                                <img src={add} alt="Segurança e Saude" width="30px" />
                                <p className='mt-1'>Adicionar</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/help" className='d-flex align-items-center flex-column'>
                                <img src={health} alt="Segurança e Saude" width="30px" />
                                <p className='mt-1' >Ajuda (Saúde)</p>
                            </Link>
                        </li>


                        <li>
                            <Link to="/rendimentos" className='d-flex align-items-center flex-column'>
                                <img src={profit} alt="Segurança e Saude" width="30px" />
                                <p className='mt-1'>Rendimentos</p>
                            </Link>
                        </li>

                        <li>
                            <div onClick={handleShowModal} className='button-profile d-flex align-items-center flex-column'>
                                <img src={user} alt="Segurança e Saude" width="30px" />
                                <p className='mt-1'>Perfil</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* MODAL LOGIN */}
                <Modal size='xl' className='modal-login' show={showModal} onHide={() => setShowModal(false)}>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Fechar
                    </Button>
                    <Modal.Body className='p-0'>
                        <div className='container-login d-flex flex-wrap'>
                            <div className='div-addLogin text-center text-white bg-dark p-5'>
                                <img src={logo} alt="Heathly Bets" className='logo-modal' />
                                <h3 className='fs-4'>Suas apostas contabilizadas</h3>
                                <h3 className='fs-4 mt-3'>Lições de Responsabilidade financeira</h3>
                                <h3 className='fs-4 mt-3 mb-5'>Tabele suas apostas</h3>
                                <Link to='/registro' className='registro-modal'>Crie sua conta</Link>
                            </div>
                            <div className='container-loginInputs d-flex flex-column align-items-center justify-content-center'>
                                <div>

                                    <h2 className='fs-3 text-white text-center'>Faça seu login</h2>
                                    {/* INPUT EMAIL */}
                                    <div>
                                        <label htmlFor='value-email' className='email-input mb-2 text-white'>Email</label>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="value-email" placeholder="Email" />
                                            <label htmlFor="value-email">Email</label>
                                        </div>
                                    </div>

                                    {/* INPUT SENHA */}
                                    <div className='mt-4'>
                                        <label htmlFor='value-pass' className='mb-2 text-white'>Senha</label>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="value-pass" placeholder="Senha" />
                                            <label htmlFor="value-pass">Senha</label>
                                        </div>
                                    </div>

                                    {/* ENTRAR */}
                                    <div className='d-flex flex-column align-items-center mb-3'>
                                        <Link to='/recovery' className='mt-3'>Esqueci minha senha</Link>
                                        <Link to='/registro' className='registro-modal mt-3 p-3'>Entrar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </header>
    );
}


export default Header;

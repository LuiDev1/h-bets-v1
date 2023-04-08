// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
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
    return (
        <header className="App-header ">

            {/* BOTÃO SANDUICHE */}
            <div>
                <input type="checkbox" id="toggle" className="toggle" />
                <label for="toggle" className="icon">
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
                        <Link to="/profile" className='d-flex align-items-center flex-column'>
                            <img src={user} alt="Segurança e Saude" width="30px" />
                            <p className='mt-1'>Perfil</p>
                        </Link>
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
                            <Link to="/profile" className='d-flex align-items-center flex-column'>
                                <img src={user} alt="Segurança e Saude" width="30px" />
                                <p className='mt-1'>Perfil</p>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    );
}


export default Header;

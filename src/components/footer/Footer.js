// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
// //


// IMAGENS
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import logo from './images/heathly-bets.png'
// //

// CSS
import './Footer.css'
// //




function Footer() {
    return (
        <footer className='d-flex justify-content-around align-items-center flex-wrap'>
                {/* LOGO CENTRAL */}
                <div>
                    <img src={logo} alt='Logo' width='200px'/>
                </div>

                {/* REDES */}
                <div>
                    <ul className='ul-Footer'>
                        <li className="linkedin-footer d-flex align-items-center">
                            <img src={linkedin} width="30px" alt="Linkedin" />
                            <a href="https://linkedin.com" className='ms-2'>Linkedin</a>
                        </li>

                        <li className="twitter-footer d-flex align-items-center">
                            <img src={twitter} width="30px" alt="Linkedin" />
                            <a href="https://twitter.com" className='ms-2'>Twitter</a>
                        </li>

                        <li className="instagram-footer d-flex align-items-center">
                            <img src={instagram} width="30px" alt="Linkedin" />
                            <a href="https://instagram.com" className='ms-2'>Instagram</a>
                        </li>
                    </ul>
                </div>


                <div>
                    <ul className='text-center mt-5'>
                        <li>
                            <a href="github.com/luidev1" className="text-dark">Nossos planos</a>
                        </li>
                        <li className='mt-3'>
                            <a href="github.com/luidev1" className="text-dark">Saiba mais</a>
                        </li>
                        <li className='mt-3'>
                            <a href="github.com/luidev1" className="text-dark">Controle de apostas</a>
                        </li>
                        <li className='mt-3'>
                            <a href="github.com/luidev1" className="text-dark">Ajuda</a>
                        </li>

                    </ul>
                </div>
        </footer>
    );
}


export default Footer;

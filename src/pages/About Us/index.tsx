import './styles.css';
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


function AboutUs() {
  return (
    <div>
       <header className="header">
       <a className='header-logo' href='/'>Vanished</a>
                <nav>
                    <ul>
                        <li><a id='header-search-bar' href="#">Buscar</a></li>
                        <li><a href="/Register">Cadastrar pessoas</a></li>
                        <li><a href="/About_Us">Sobre nós</a></li>
                        <li><a href="/Login" className="btn">Login</a></li>
                    </ul>
                </nav>
            </header>
            
            <section className='main-content'>
              <div>
                <p></p>
              </div>
            </section>

            <footer className='footer'>
                <div className="footer-column">
                    <h3>Serviços</h3>
                    <ul>
                        <li><a href="#">Cadastro de pessoas</a></li>
                        <li><a href="#">Lista completa</a></li>
                        <li><a href="#">Encontrei alguém</a></li>
                        <li><a href="#">Denunciar</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Informações</h3>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Fale conosco</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <p className="contact-logo">Vanished</p>
                    <p className='contact-info'>+55 (11) 96018-5676</p>
                    <p className='contact-info'>contact@vanished.com</p>
                    <div className="icons">
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"><BiLogoGmail /></a>
                    </div>
                </div>
            </footer>
              <div className="copyright">
                      &copy; 2025 — Erick Castro <a href="#"></a>
              </div>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>   
    </div>
  )
}

export default AboutUs;

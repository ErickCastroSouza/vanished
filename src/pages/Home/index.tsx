import './styles.css';
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Home() {
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


            <section className="container">
                <div className="text-section">
                    <h1>Em média 217 pessoas desaparecem por dia no Brasil</h1>
                    <div className="stats">
                        <div><strong>6 mil+</strong><br />Por Mês</div>
                        <div><strong>82 mil+</strong><br />Por Ano</div>
                    </div>
                    <p>Aqui, você pode cadastrar um desaparecimento, compartilhar informações e acessar relatos de pessoas encontradas. 
                      Com a força da comunidade e o apoio da tecnologia, acreditamos que cada compartilhamento pode fazer a diferença.
                      Junte-se a nós nessa missão. Quanto mais pessoas envolvidas, maiores as chances de reunir famílias e trazer esperança de volta aos lares. </p>
                </div>

                <div className='image-container'>
                    <p></p>
                </div>
            </section>
          

            <section className="container2">
              <div>
                <p></p>
              </div>
            </section>


            <section className='container3'>
              <div>
                <p></p>
              </div>
            </section>


            <footer className='footer'>
              <div className="footer-column">
                  <h3>Serviços</h3>
                  <ul>
                      <li><a href="/Register">Cadastro de pessoas</a></li>
                      <li><a href="#">Lista completa</a></li>
                      <li><a href="#">Encontrei alguém</a></li>
                      <li><a href="#">Denunciar</a></li>
                  </ul>
              </div>
              <div className="footer-column">
                  <h3>Informações</h3>
                  <ul>
                      <li><a href="/About_Us">Sobre nós</a></li>
                      <li><a href="#">Fale conosco</a></li>
                  </ul>
              </div>
              <div className="footer-column">
                  <p className="contact-logo">Vanished</p>
                  <p className='contact-info'>+55 (11) 96018-5676</p>
                  <p className='contact-info'>contact@vanished.com</p>
                  <div className="icons">
                      <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
                      <a href="#" aria-label="Mandar email"><BiLogoGmail /></a>
                  </div>
              </div>
            </footer>
            <div className="copyright">
                    &copy; 2025 — Erick Castro
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
    </div>
  )
}

export default Home

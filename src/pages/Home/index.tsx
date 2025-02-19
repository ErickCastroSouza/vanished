import './styles.css';

function Home() {
  return (
    <div>
            <header className="header">
                <h2>Vanished</h2>
                <nav>
                    <ul>
                        <li><a href="/About_Us">Sobre nós</a></li>
                        <li><a href="/Register">Cadastrar pessoas</a></li>
                        <li><a href="#">Buscar</a></li>
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
            </section>
          
            <section className="container2">
              <div>
                <p></p>
              </div>
            </section>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
    </div>
  )
}

export default Home

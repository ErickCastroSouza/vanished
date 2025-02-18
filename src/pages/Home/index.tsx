import './styles.css';

function Home() {
  return (
    <div className="app">
            <header className="header">
                <h2>Vanished</h2>
                <nav>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Cadastrar pessoas</a></li>
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
                    <p>Esse site pode ajudar você e milhares de pessoas a encontrar seus entes queridos e amigos </p>
                    <a href="#" className="btn">Encontre agora</a>
                </div>
                <div className="fade-image-section">
                    <div className="fade-overlay"></div>
                    <img src="" alt="Horizontal Example" id="fade-image" />
                </div>
            </section>
          
            <section className="container2">
              <div>
                <p>teste</p>
              </div>
            </section>

    </div>
  )
}

export default Home

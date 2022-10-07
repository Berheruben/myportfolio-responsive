
import './App.css';

import paninoteka from './images/paninoteka.jpg'
import todos from './images/Todos.png'
import youtubeclone from './images/youtubeclone.png'
function App() {
  return (
    <>
    <section className="hero">
      <nav>
        <ul id="nav-list">
          <li><a href="#about-me">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact-me">Contact</a></li>
        </ul>
        <button className="btn" id="btn">
          <i className="fas fa-bars"></i>
        </button>
      </nav>
      <div className="hero-area">
        <div className="hero-text">
          <h1>Ruben Berhé</h1>
          <p>Software Developer</p>
          <div className="button"><a href="#about-me">About me</a></div>
        </div>
        <div className="socials">
          <div><a href="https://github.com/Berheruben" className="social">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          </a></div>
          <div><a href="https://www.linkedin.com/in/ruben-berhe-5184b0244/" className="social">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
          </a></div>
        </div>
      </div>
    </section><section className="sub-section" id="about-me">
        <div className="information">
          <h2>About Me</h2>
          <p>Ciao. Mi chiamo Ruben Berhé. Sono un junior Software Developer a cui piace scoprire nuove tecnologie e utilizzare quest'ultimi per creare siti web.</p>
        </div>
        <div className="headshot-container">

        </div>
      </section><section className="sub-section-alternative" id="projects">
        <h2>Projects</h2>
        <div className="project-container">

          <div className="project-card">
            <img className="project-image" src={youtubeclone} alt="Project One Image" />
            <h3>Youtubeclone</h3>
            <p className="subtext">in questo progetto,ho ricreato la pagina di Youtube,utilizzando React.js e styled-components(libreria npm) .</p>
            <hr />
            <p className="subtext"><a className="project-link" href="https://youtubecloneclient.herokuapp.com/">Vedi il sito</a></p>
          </div>
          <div className="project-card">
            <img className="project-image" src={todos} alt="Project One Image" />
            <h3>Todolist</h3>
            <p className="subtext">Ho creato una Todolist dove cliccando sul bottone "+salve nome", comparirà una popup dove si puo scrivere una task da fare. Ho utilizzato React con Typescript. PS:ho rifatto la stessa Todolist ma in angular(lo trovate su github).</p>
            <hr />
            <p className="subtext"><a className="project-link" href="https://todolisttsx.herokuapp.com/">Vedi il sito</a></p>
          </div>
          <div className="project-card">
            <img className="project-image" src={paninoteka} alt="Project One Image" />
            <h3>Paninoteka</h3>
            <p class="subtext">Durante l'alternanza scuola-lavoro,ho sviluppato una webApp per ordinare cibo da asporto, utilizzando Angular(front-end) ed express.js(back-end)
              Il progetto è stato rilasciato su Heroku.</p>
            <hr />
            <p className="subtext"><a className="project-link" href="http://paninotekaclient.herokuapp.com/">Vedi il sito</a></p>
          </div>
        </div>
      </section><footer id="contact-me">
        <h2>Contact me</h2>
        <p>rubenberhe56@gmail.com</p>
      </footer>
      </>
 
  );
}

export default App;

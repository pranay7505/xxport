import ContactMe from './components/Email'
import './App.css'
import Aboutme from './components/Aboutme'
import Navbar from './components/Navbar'
import Skillset from './components/Skillset'

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <h1>Welcome to Home</h1>
      </section>
      <section id="projects">
        <h1>My Projects</h1>
      </section>
      <section id="about">
        <h1>About Me</h1>
      </section>
      <section id="contact">
        <h1>Contact Me</h1>
      </section>
    </>
  );
}

export default App;

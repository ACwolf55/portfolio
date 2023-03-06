import logo from './logo.svg';
import './Reset.css'
import './App.css';
import { Projects } from './Projects';
import Nav from './Nav';
import Contact from './Contact';
import Info from './Info'

function App() {
  return (
    <div className="App">
      <header>
      <h1>Alex Crowe</h1>
      <h2>Web Developer</h2>
      </header>

      <Info />

      <main>
    <Projects/>
    </main>

    <Contact/>
    </div>
  );
}

export default App;

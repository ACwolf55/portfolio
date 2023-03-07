import logo from './logo.svg';
import './Reset.css'
import './App.css';
import { Projects } from './Projects';
import Contact from './Contact';
import Info from './Info'
import Arrows from './Arrows';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Alex Crowe</h1>
      <h2>Web Developer</h2>
      </header>
      
<nav>
  
  <Arrows/>
  <Info />

</nav>
      

      <main>
    <Projects/>
    </main>

    <Contact/>
    </div>
  );
}

export default App;

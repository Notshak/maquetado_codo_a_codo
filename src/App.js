import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Conf from './components/conf'
import Oradores from './components/oradores'
import Octubre from './components/octubre'
import Orador from './components/orador'
import Bottom from './components/bottom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Conf/>
      <Oradores/>
      <Octubre/>
      <Orador/>
      <Bottom/>
    </div>
  );
}

export default App;

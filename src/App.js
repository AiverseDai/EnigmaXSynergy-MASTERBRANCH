
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Agents from './Components/Agents';
import Bproperty from './Components/Bproperty';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Bproperty/>
      <Agents/>
    </div>
  );
}

export default App;

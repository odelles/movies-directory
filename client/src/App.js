import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Mainnewslider from './components/Mainnewslider';
import Breakingnews from './components/Breakingnews';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <Mainnewslider Image1="./img/news-800x500-1"/>
      <Breakingnews/>
    </div>
  );
}

export default App;

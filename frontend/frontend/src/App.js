import './App.css';
import Header from "./components/header.js"
import NavBar from "./components/navBar.js"
import Main from './components/Main.js'


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <NavBar/>
    </div>
  );
}

export default App;

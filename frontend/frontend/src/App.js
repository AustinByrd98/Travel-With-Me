import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header.js";
import MainNavBar from "./components/navBar.js";

// import { Tripcard } from './components/card.js'
// import { Container, Row, Col } from 'react-bootsrap'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainNavBar/>
    </div>
  );
}

export default App;

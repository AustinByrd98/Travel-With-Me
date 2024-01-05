import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Header from "./components/header.js";
import MainNavBar from "./components/navBar.js";
import TripCard from './components/TripCard.js'
import Main from './components/Main.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MainNavBar/>
      <TripCard/>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Header from "./components/header.js";
import MainNavBar from "./components/navBar.js";
import TripCard from './components/TripCard.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainNavBar/>
      <TripCard/>
    </div>
  );
}

export default App;

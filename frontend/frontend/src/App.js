import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Header from "./components/header.js";
import MainNavBar from "./components/navBar.js";
import Main from './components/Main.js'


function App(props) {
  return (
    <div className="App">
      <Header/>
       <MainNavBar/>
      <Main/>
      <MainNavBar/>
    </div>
  );
}

export default App;

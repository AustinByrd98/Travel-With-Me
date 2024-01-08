import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import {useState} from "react";
import Header from "./components/header.js";
import MainNavBar from "./components/navBar.js";
import Main from './components/Main.js'
import Auth from './components/Auth.js'

function App(props) {

  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Header/>
       <MainNavBar user={user} setUser={setUser}/>
      <Auth user={user} setUser={setUser}/>
      <Main user={user}/>
    </div>
  );
}

export default App;

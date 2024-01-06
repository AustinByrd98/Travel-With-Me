import './App.css';
import Header from "./components/header.js"
import NavBar from "./components/navBar.js"
import Main from './components/Main.js'
import Auth from './components/Auth.js'


function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Header/>
      <Auth user={user} setUser={setUser}/>
      <Main user={user}/>
      <NavBar/>
    </div>
  );
}

export default App;

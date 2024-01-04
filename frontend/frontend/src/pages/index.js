import Header from "frontend/frontend/public/components/header.js";
import NavBar from '../components/navBar'

const Index = (props) =>{
   return(
    props.trips.map((trips) => (
        <div key={trips._id} className='trips'>
            <h3>{trips.name}</h3>
            <Header />
            <NavBar />
        </div>
    ))
   )
}

export default Index
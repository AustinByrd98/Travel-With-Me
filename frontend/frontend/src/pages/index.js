import TripCard from "../components/TripCard.js";

const Index = (props) =>{
    console.log(props)
    if(!props.trips){
        return(<h1>loading</h1>)
    }

   return(

    <TripCard trips={props.trips}/>
       
    // //    props.trips.map((ele,index) => {

    //         return(
            
    //     <div className='trips'>
    //        <TripCard {...ele}
    //        key={index}
    //        />
    //     </div>)
    // })
   )
}

export default Index
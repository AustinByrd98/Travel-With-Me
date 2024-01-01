const Index = (props) =>{
   return(
    props.trips.map((trips) => (
        <div key={trips._id} className='trips'>
            <h3>{trips.name}</h3>
        </div>
    ))
   )
}

export default Index
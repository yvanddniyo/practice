import ListGroup from "./components/ListGroup"


const  App = () => {
  let items = ["New York", "Franscisco", "Paris", "Kigali", "Las Vegas"];

  return (
   <div>
    {/* <Message /> */}
    <ListGroup  items ={items} heading= "The best cities in the world"/>
  </div>
  )
}

export default App
 
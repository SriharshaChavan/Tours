import React,{useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios'
function App() {
  const [loading, setLoading]=useState(true)
  const [tours, setTours]=useState([])
  const url='https://course-api.com/react-tours-project'

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id !==id)
    setTours(newTours)
  }
  const fetchTours=()=>{
    setLoading(true)
    axios.get(url)
    .then(data=>{
      setLoading(false)
      setTours(data.data)})
  }
  useEffect(()=>{fetchTours()},[])
  if(loading){
    return <main>
      <Loading />
    </main>
  }
  if(tours.length===0){
    return(
      <main>
        <div className="title">
          <h2>No More Tours</h2>
          <button className='btn' onClick={()=>{fetchTours()}}>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
  
}

export default App



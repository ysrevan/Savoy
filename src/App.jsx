import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './components/Header'
import Carousel from './components/Carousel'
import SingleCard from './components/SingleCard';
import Footer from './components/Footer'



const App = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get("http://127.0.0.1:5500/src/data/product.json")
    .then(res=>setData(res.data))
  },[])
  return (
    <>
     <Header />
     <Carousel />
     <SingleCard  data={data} />
     <Footer />
    </>
  )
}

export default App
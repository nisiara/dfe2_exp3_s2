import { useEffect, useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Header from './layout/Header'
import Footer from './layout/Footer'

const App = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('/api/patients')
    .then( response => {
      if(!response.ok)
        throw new Error(response.status + " - " + response.statusText);

      return response.json()
    })
    .then( info => {
      setData(info)
     
    })
    .catch(error => {
      console.error(error.message)
    })

  }, [])


  return (
    <>
      <Header/>
      <AppRoutes patientList={data} />
      <Footer/>
    </>
  )
}

export default App

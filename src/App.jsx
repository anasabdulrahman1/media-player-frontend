
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landingpage from './Pages/Landingpage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>

    <Header/>

    <Routes>
      <Route  path='/' element={<Landingpage/>} />
      <Route  path='/home' element={<Home/>} />
      <Route  path='/watch-history' element={<WatchHistory/>} />

    </Routes>


    <Footer/>
      
    </>
  )
}

export default App

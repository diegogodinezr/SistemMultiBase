import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Components/Home'
import Services from './Components/Services'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function App() {

  return (
    <>
      <div>
        <Header/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App

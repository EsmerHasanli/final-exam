import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import DetailsPage from './pages/DetailsPage'
import AddPage from './pages/AddPage'
import Basket from './pages/Basket'
import Wishlist from './pages/Wishlist'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:id' element={<DetailsPage/>}></Route>
      <Route path='/add' element={<AddPage/>}></Route>
      <Route path='/basket' element={<Basket/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
     </Routes>
    </>
  )
}

export default App

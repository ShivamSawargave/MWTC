import { useState } from 'react'

import { Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Gallery from './components/Gallery'
import Video from './components/Video'
import Help from './components/Help'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/Banner' element={<Banner/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Video' element={<Video/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App

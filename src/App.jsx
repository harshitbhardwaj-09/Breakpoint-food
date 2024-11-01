import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Erorr from './Pages/Error'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/success' element={<Success />} />
      <Route path='/*' element={<Erorr />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
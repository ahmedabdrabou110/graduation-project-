import React from 'react'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/Sign In/SignIn'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default App

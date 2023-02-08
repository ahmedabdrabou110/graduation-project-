import React , {useState} from 'react'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Modal from './components/Modal/Modal'

const App = () => {
  const [show , setShow] = useState<boolean>(false)
  return (
    <>
    <Routes>
      <Route path='/' element={<Main showModal ={() => setShow(true)} />} />
    </Routes>
    {
      show && (<Modal  showModal ={(x:boolean)=>setShow(x)} closeModal = {(y:boolean) => setShow(y)} />)
    }
    </>
  )
}

export default App

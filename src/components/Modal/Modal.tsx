import React  from 'react'
import "./Modal.css"
import SignIn from './SignIn'
import ReactDOM from 'react-dom'
import { Show } from '../Main/Main';

interface modalTypes {
    showModal : (x:boolean) => void , 
    closeModal : (y:boolean) => void
}

interface closeModal {
    close: () => void
}



const Backdrop = ({close}:closeModal) => {
    return (
        <div onClick={close} className="backdrop"></div>
    )
}

const Overlay = ({close}:closeModal) => {
    return(
        <div className="overlay">
            <SignIn />
            <div className="close" onClick={close}>x</div>
        </div>
    )
}

const Modal = ({showModal , closeModal}:modalTypes) => {
        const show =() => {
            showModal(true)
        }

        const close =() => {
            closeModal(false)
        }

      return (
    <React.Fragment>
        {
            ReactDOM.createPortal(<React.Fragment>
                <Backdrop close={close}  />
                <Overlay close={close} />
            </React.Fragment> , 
            document.getElementById("modal") as HTMLElement
            )
        }
        
    </React.Fragment>
  )
}

export default Modal
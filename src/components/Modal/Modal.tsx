import React  , {useContext} from 'react'
import "./Modal.css"
import SignIn from './SignIn'
import ReactDOM from 'react-dom'
import { ModelContext } from '../store/ShowModelContext';



const Backdrop = () => {
    const modalCtx = useContext(ModelContext);
    return (
        <div  className="backdrop" onClick={modalCtx.closeModel}></div>
        )
    }
    
    const Overlay = () => {
        const modalCtx = useContext(ModelContext);
        return(
            <div className="overlay">
            <SignIn />
            <div className="close" onClick={modalCtx.closeModel}>x</div>
        </div>
    )
}

const Modal = () => {
        

      return (
    <React.Fragment>
        {
            ReactDOM.createPortal(<React.Fragment>
                <Backdrop   />
                <Overlay  />
            </React.Fragment> , 
            document.getElementById("modal") as HTMLElement
            )
        }
        
    </React.Fragment>
  )
}

export default Modal
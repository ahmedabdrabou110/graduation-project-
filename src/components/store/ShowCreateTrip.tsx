import React , {useState} from 'react';
import { childrenPropsType } from './ShowModelContext';

interface TripType {
    show:boolean , 
    showTrip:()=>void ,
    closeTrip:()=>void
}




export const CreateTripContext = React.createContext<TripType>({
    show:false ,
    showTrip:()=>{} ,
    closeTrip:()=>{}
}) ;


const CreateTripProvider = ({children}:childrenPropsType)=>{
    const [show,setShow] = useState<boolean>(false);

    const showTrip = ()=>{
        setShow(true);
    };

    const closeTrip = ()=>{
        setShow(false);
    }

    const showTripValue:TripType ={
            show ,
            showTrip ,
            closeTrip ,
        }

    return (
        <CreateTripContext.Provider value={showTripValue}>
            {children}
        </CreateTripContext.Provider>
    )
}


export default CreateTripProvider



import React , {useState} from 'react';
import { childrenPropsType } from './ShowModelContext';

interface PlanType {
    show:boolean , 
    showPlan:()=>void ,
    closePlan:()=>void
}




export const CreatePlanContext = React.createContext<PlanType>({
    show:false ,
    showPlan:()=>{} ,
    closePlan:()=>{}
}) ;


const CreatePlanProvider = ({children}:childrenPropsType)=>{
    const [show,setShow] = useState<boolean>(false);

    const showPlan = ()=>{
        setShow(true);
    };

    const closePlan = ()=>{
        setShow(false);
    }

    const showPlanValue:PlanType ={
            show ,
            showPlan ,
            closePlan ,
        }

    return (
        <CreatePlanContext.Provider value={showPlanValue}>
            {children}
        </CreatePlanContext.Provider>
    )
}


export default CreatePlanProvider



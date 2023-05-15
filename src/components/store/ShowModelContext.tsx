import React , {useState} from 'react';

interface ModelTypes {
    showModel: () => void,
    closeModel: () => void
    model:boolean
}

export interface childrenPropsType {
    children: React.ReactNode
}

export const ModelContext =  React.createContext<ModelTypes>({
    showModel:()=>{} ,
    closeModel:()=>{},
    model:false
});

const ModalContextProvider = ({children}:childrenPropsType) => {
    const [model  , setModal] = useState<boolean>(false) ;

    const showModel = ()=>{
        setModal(true);
    }

    const closeModel = ()=>{
        setModal(false);
    }


    const modalValue:ModelTypes ={
        closeModel ,
        showModel ,
        model
    }

    return (
        <ModelContext.Provider value={modalValue}>
            {children}
        </ModelContext.Provider>
    )
}

export default ModalContextProvider ;
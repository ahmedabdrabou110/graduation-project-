import React , {useState} from 'react';
import { childrenPropsType } from './ShowModelContext';

interface AccountType {
    show:boolean , 
    showAccount:()=>void ,
    closeAccount:()=>void
}




export const AccountContext = React.createContext<AccountType>({
    show:false ,
    showAccount:()=>{} ,
    closeAccount:()=>{}
}) ;


const AccountContextProvider = ({children}:childrenPropsType)=>{
    const [show,setShow] = useState<boolean>(false);

    const showAccount = ()=>{
        setShow(true);
    };

    const closeAccount = ()=>{
        setShow(false);
    }

    const showAccountValue:AccountType ={
            show ,
            showAccount ,
            closeAccount ,
        }

    return (
        <AccountContext.Provider value={showAccountValue}>
            {children}
        </AccountContext.Provider>
    )
}


export default AccountContextProvider



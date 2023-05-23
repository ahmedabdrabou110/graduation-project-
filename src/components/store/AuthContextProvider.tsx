import React, { createContext , useState , useEffect } from "react" ;
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../../config/firebase";
export const AuthContext = createContext<null|any|{}>(null!);

export const AuthContextProvider = (props:any)=>{

    const [user, setUser] = useState<null | Object>(null);

    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth , user =>{
            if(user) {
                setUser(user);
            }else {
                setUser(null);
            }
        } );

        return ()=>{
            unsubscriber();
        }
    },[])
    

    return (
        <AuthContext.Provider value={{user}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
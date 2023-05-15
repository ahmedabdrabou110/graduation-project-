import React from "react";
import { childrenPropsType } from "./ShowModelContext";

interface searchContextType {
    closeSearch:()=>void , 
    showSearch:()=>void,
    toggle:boolean ,
}

export const SearchContext = React.createContext<searchContextType>({
    closeSearch:()=>{} , 
    showSearch:()=>{} , 
    toggle:false
}) ;


 const ShowSearchContext = ({children}:childrenPropsType)=>{
    const [toggle, setToggle] = React.useState<boolean>(false) ;


    const showSearch = () => {
        setToggle(true);
    }
    const closeSearch = () => {
        setToggle(false);
    }

    return (
        <SearchContext.Provider value={{closeSearch , showSearch , toggle}}>
            {children}
        </SearchContext.Provider>
    )
}

export default ShowSearchContext;

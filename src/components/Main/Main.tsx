import React , {useState , useEffect} from 'react'
import { Splash } from '../Splash/Splash'
import Index from './index';
export interface Show {
    showModal:()=>void
}

const Main = ({showModal} :Show ) => {
    const [loading , setLoading] = useState<boolean>(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },3000)
    },[])
    return (
        <div>
            {loading ? <Splash /> : <Index showModal={showModal} />}
        </div>
    )
}

export default Main

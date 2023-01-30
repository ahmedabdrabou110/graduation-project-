import React , {useState , useEffect} from 'react'
import { Splash } from '../Splash/Splash'

const Main = () => {
    const [loading , setLoading] = useState<boolean>(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },3000)
    },[])
    return (
        <div>
            {loading ? <Splash /> : "Main"}
        </div>
    )
}

export default Main

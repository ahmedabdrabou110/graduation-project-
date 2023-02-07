import React , {useState , useEffect} from 'react'
import { Splash } from '../Splash/Splash';
import Regestration from './Regestration';

const SignIn = () => {
    const [loading , setLoading] = useState<boolean>(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },3000)
    },[])
  return (
    <>
        {loading ? <Splash /> : <Regestration />}
    </>
  )
}

export default SignIn
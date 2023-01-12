import  { useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { userRouter } from'nex/router'

export default function Counter(){

    const [number, setNumber]  =  useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username')
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') :  <></>
    }, [isUser] )

    return (
        <>
            <div>COUNTER PAGE</div>
            <div>Welcome {isUser} </div>

            <div>{number}</div>
            <buttton onClick={() => setNumber(number +1 )}>Incrementt</buttton>
            <button onClick={() => setNumber(number - 1 )}>Decrementt</button>
        </>
    )    
}
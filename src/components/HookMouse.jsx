import React,{useState,useEffect} from 'react'

export default function HookMouse() {

    const [value, setCoordiantes] = useState({x:0,y:0});

    const [display, isDisplay] = useState(true);

    const letRock = (e) => {
        console.log('mouse event')
        setCoordiantes({x:e.x,y:e.y});
    }

    useEffect(() => {
        window.addEventListener('mousemove', letRock)
        return () => {
            console.log('unmounsed done')
            window.removeEventListener('mousemove', letRock)
        }
    },[])

    return (
        <div>
           {display === true ? (`x: ${value.x} y: ${value.y}`) : null}

           <button onClick={() => isDisplay(!display)}>toggle</button>
        </div>
    )
}

import React,{useState} from 'react'
import Welcome from './Welcome'

export const Greet = (props) => {
    //const {prop,name,children,data} = props;
    // const iterate =  () => {
    //     for(const pro in prop) {
    //         console.log(` ${pro} : ${prop[pro]}`);
    //     }

    //     data.forEach(element => {
    //         console.log(element);
    //     });
    // }
    const [info, setName] = useState([{name:'nalin',age:24},{name:'sunil',age:54}])

    const handleEvent = () => {
        setName([{name : 'updateName'}]);
        console.log("button working");
    }

    return (
        <div>
        {/* {iterate()}
            <h1>greet me {name},{children}!</h1>
            <button onClick={handleEvent()}>click</button>
             */}
               { info.map( e =>  <p key={Math.random()}>{e.name} {e.age}</p>)
            }
             <Welcome handleEvent={handleEvent} />
        </div>
    );
}


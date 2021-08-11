import React from 'react';

import { Greet } from './components/Greet'
// import Welcome from './components/Welcome'
import PersonList from './components/personList'
import ParentInpu from './components/parentInpu'
import IncrementCounter from './components/highOrderComponent/incrementCounter';
import IncrementCount from './components/passingFunAsProp/incrementCount';
import CommonFunction from './components/passingFunAsProp/commonFunction'
import HookMouse from './components/HookMouse'

import Axios from './components/axios'

export default function App () {
  // const history = createBrowserHistory();

    // useEffect(() => {
    //   return props.location.pathname === '/' ? (<List />) : (props.location.pathname === '/list' ? <List /> : null)
    // },[props.location.pathname]);
    
    return (
      <>
        {/* <Greet prop = {{a:1, b:2, c:3, d:4}} name={'nalin'} data={[2,5,6,7,8]}><p>children</p> </Greet>
        <Greet prop = {{a:1, b:2, c:3, d:4}} name={'kumar'} data={[2,5,6,7,8]}/>
        <PersonList /> */}
        {/* <Router history={history}>
          <Routes {...props} />
        </Router> */}
        {/* <ParentInpu  render={(isLoggged) => isLoggged ? 'nalin' : 'guest'}/>
        {console.log('superparent')} */}
        {/* <IncrementCounter /> */}
        <CommonFunction render={(count,incrementCounter) => 
        <IncrementCount count={count} incrementCounter={incrementCounter}/>}/>

        {/* <Axios /> */}

        {/* <HookMouse /> */}
        
      </>
    )
}

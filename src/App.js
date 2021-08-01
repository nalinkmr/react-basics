import React , {useEffect} from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './router';
import Home from './home/home';

export default function App (props) {
  const history = createBrowserHistory();

    useEffect(() => {
      return props.location.pathname === '/' ? (<Home />) : (props.location.pathname === '/home' ? <Home /> : null)
    },[props.location.pathname]);
    
    return (
      <>
        <Router history={history}>
          <Routes {...props} />
        </Router>
      </>
    )
}

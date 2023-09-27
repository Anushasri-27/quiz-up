import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useProfile } from '../context/profile.context';

const Home = () => {
    const userLogged = useProfile();
    const history = useHistory();
    useEffect(()=>{
        if(!userLogged){
            history.push('/');
        }
    },[userLogged , history])

  return (
    <div>
      home
    </div>
  )
}

export default Home;

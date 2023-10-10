import React from 'react';
import { Button } from 'rsuite';
import {Link} from 'react-router-dom';
import '../styles/start.css';

const Score = () => {
  return (
    <div>
      <Link to={"/result"} ><Button className='btn-score' size='lg'  appearance='primary' color='cyan'>SCORE</Button></Link>
    </div>
  )
}

export default Score;

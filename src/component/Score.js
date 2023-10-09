import React from 'react';
import { Button } from 'rsuite';
import {Link} from 'react-router-dom';

const Score = () => {
  return (
    <div>
      <Link to={"/result"} ><Button className='btn-score' size='lg'  appearance='primary' color='cyan'>Start</Button></Link>
    </div>
  )
}

export default Score;

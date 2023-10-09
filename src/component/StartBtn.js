import React from 'react'
import {Link} from 'react-router-dom';
import { Button } from 'rsuite';
const StartBtn = () => {
  return (
    <div>
      <Link to={"/start"} ><Button className='btn-start' size='lg' appearance='primary' color='cyan'>Start</Button></Link>
    </div>
  )
}

export default StartBtn;

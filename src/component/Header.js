import React from 'react';
import '../styles/header.css';
import { Link } from "react-router-dom";
import { Button } from 'rsuite';

const Header = () => {
  return (
    <div className='header-start'>
         <Link to="/"  className="header-title" ><Button appearance='ghost' color='violet'>QuizUp</Button></Link>
         <hr className='divider' />
    </div>
  )
}

export default Header;
 
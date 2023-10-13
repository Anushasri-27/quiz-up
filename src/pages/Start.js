/* eslint-disable no-unused-vars */
import { useState } from 'react';
import '../styles/start.css';
import Header from '../component/Header';
import QuizSetting from '../component/QuizSetting';
import { useProfile } from "../context/profile.context";
const  Start = ({name ,setName ,fetchQuestion}) => {
  

  return (
    <div className='start-app'>
          <Header />
          <QuizSetting name={name} setName={setName} fetchQuestion={fetchQuestion} />
    </div>
  )
}

export default Start;

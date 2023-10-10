/* eslint-disable no-unused-vars */
import { useState } from 'react';
import '../styles/start.css';
import Header from '../component/Header';
import QuizSetting from '../component/QuizSetting';
import { useProfile } from "../context/profile.context";
const  Start = () => {
  const { profile, isLoding } = useProfile();

  console.log(profile);
  const [name , setName] = useState(profile.name);

  return (
    <div className='start-app'>
          <Header />
          <QuizSetting name={name} setName={setName} />
    </div>
  )
}

export default Start

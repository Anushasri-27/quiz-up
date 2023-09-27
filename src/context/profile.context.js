import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
const ProfileContext = createContext();

//component that will provide all other compenent with profilecontex

export const ProfileProvider = ({ children }) => {
  const [logged, setLogged] = useState(null);
  //we will use useEffect to get data from firebase when component mount
   useEffect(()=>{
     
   },[]);
  return (
    <ProfileContext.Provider value={logged}>{children}</ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);

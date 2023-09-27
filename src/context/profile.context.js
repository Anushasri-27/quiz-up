import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { auth, database } from "../misc/firebase";

const ProfileContext = createContext();

//component that will provide all other compenent with profilecontex

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoding ,setIsLoading] = useState(true);
  
  //we will use useEffect to get data from firebase when component mount
  useEffect(() => {
    setIsLoading(true)
    auth.onAuthStateChanged((authObj) => {
      if (authObj) {
        database.ref(`/profiles/${authObj.uid}`).on("value", (snap) => {
          //give data in form js object
          const { name, createdAt } = snap.val();

          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            Email: authObj.email,
          };
          setProfile(data);
          setIsLoading(false);
        });
      } else {
        setProfile(false);
        setIsLoading(false);
      }
    });
  }, []);
  return (
    <ProfileContext.Provider value={{profile,isLoding}}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);

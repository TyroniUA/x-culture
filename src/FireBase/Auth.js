import React, { useEffect, useState } from "react";
import firebase from '../FireBase/Firebase.js'

export const AuthContext = React.createContext();

let app = firebase;
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <><div><h1 style={{
        font: '600 4.43vw Roboto',
        width: '44.52vw',
        textAlign: 'center',
        margin: '5% auto 0 auto'}}>Loading...</h1></div></>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
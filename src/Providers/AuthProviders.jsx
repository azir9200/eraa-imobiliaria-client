import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import UseAxiosOpen from "../Components/UseAxiosOpen/UseAxiosOpen";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosOpen = UseAxiosOpen();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const googoleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const updateUserInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
        //get token and do...
        const userInfo = { email: currentUser.email };
        axiosOpen.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token);
            }
          })
      } else {
        //do.......Remove
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    })
    return () => {
      return unsubscribe()
    }
  }, [axiosOpen])


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googoleSignin,
    logOut,
    updateUserInfo
  }

  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
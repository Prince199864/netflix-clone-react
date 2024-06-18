import React, { useEffect } from 'react';
import './App.css';
import './firebase/firebase';
import { getFirestore, addDoc, collection } from "firebase/firestore";
import HomeScreen from "./components/HomeScreen"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';
import { auth } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Footer from './components/Footer';

function App() {

  //Adding user for login page
  // useSelector() ​ Allows you to extract data from the Redux store state for use in this component, using a selector function
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
        console.log(userAuth);
      }
      else {
        // Logged Out
        //importing { logout } from './features/counter/userSlice'
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>{!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path="/profile" element={<ProfileScreen/>} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/test" element={<h1 style={{ color: "white" }}>Test</h1>} />
        </Routes>
      )}
      <Footer/>
      </Router>
    </div>
  );
}

export default App;

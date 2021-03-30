import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import "./App.css";
import ProfileScreen from "./pages/ProfileScreen";
import LoginScreen from "./pages/LoginScreen";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

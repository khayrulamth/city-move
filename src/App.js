import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import './App.css';
import Home from '../src/components/Home/Home';
import Header from '../src/components/Header/Header';
import Login from '../src/components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import Profile from './components/Profile/Profile';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path='/destination/:vehicleId'>
              <Destination></Destination>
            </PrivateRoute>

            <Route path='/destination'>
              <Home></Home>
            </Route>

            <PrivateRoute path='/profile'>
              <Profile></Profile>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
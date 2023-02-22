import React,{Fragment} from "react";
 

import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import classes from './App.css';
import { useSelector } from "react-redux";

 

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>  
      <Header/>
      {isAuthenticated && <UserProfile/>}
      {!isAuthenticated && <Auth/>}
      <Counter />
 
    
    </Fragment>
  );
};

export default App;

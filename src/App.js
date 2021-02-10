import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import NotFound from './components/pages/NotFound';
import SubmitUser from './components/pages/SubmitUser';

function App(props) {
  return(
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={SubmitUser} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User}/>
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
    
    
  );
  
}
export default App;
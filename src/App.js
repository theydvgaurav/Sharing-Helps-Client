import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './App.css'

import Posts from './pages/Posts/Posts';
import Home from './pages/Home/Home';
import NewPost from './pages/NewPost/NewPost';
import Navbar from './Components/Navbar/Navbar';
import Support from './pages/Support/SupportUs';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <div className="back" > 
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/posts" exact>
          <Posts/>
        </Route>
        <Route path="/newpost" exact>
          <NewPost/>
        </Route>
        <Route path="/support" exact>
          <Support/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    </div>
   </Router>
   
  );
}

export default App;

import React,{Component} from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom'
import User from './containers/User'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ul>
        <li><link to='/user/apple'/>애플</li>
        <li><link to='/user/google'/>구글</li>
        <li><link to='/user/microsoft'/>MS</li>
        </ul>
        <switch>
          <Route exact path='/' render={()=>(<Redirect to = "/user/apple"></Redirect>)}>
            <Route
              path='/user/:id'
              render={
                ({match})=><User user={match.params.id}/>}>~
            </Route>

          </Route>
        </switch>
      </div>
    );
  
  }
}

export default App;

import React, {Component} from 'react';
import '../assets/css/App.css'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyNavBar from '../components/MyNavBar'
import Mypage from '../containers/Mypage'
import Hello from '../components/Hello'
import Login from './Login'
import Join from './Join'
class App extends Component{
  render(){
    return (
      <div className='wrapper'>
        <MyNavBar></MyNavBar>
      <Login></Login>
      <Join></Join>
      <Mypage></Mypage>
      </div>
      
    )
  }
}

export default App;
 
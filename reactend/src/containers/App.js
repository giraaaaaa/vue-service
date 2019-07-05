import React, {Component} from 'react';
import '../assets/css/App.css'
import MyNavBar from '../components/MyNavBar'
import Mypage from '../containers/Mypage'
import Hello from '../components/Hello'
import Login from './Login'
import Join from './Join'

class App extends Component{
  render(){
    return (
      <div className='wrapper'>
        <MyNavBar/>
      
      </div>
      
    )
  }
}

export default App;
 
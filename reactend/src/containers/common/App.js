import React, {Component} from 'react';
import '../../assets/css/App.css'
import MyNavBar from '../../components/MyNavBar'
// import Mypage from '../customer/Mypage'
// import Hello from '../customer/Hello.jsx'
// import Login from '../customer/Login'
// import Join from '../customer/Join'

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
 
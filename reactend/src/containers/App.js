import React, {Component} from 'react';
import './App.css';
import Hello from './component/presentational/Hello.js.js';
import navbar from './component/presentational/navbar.js.js';
class App extends Component{
  render(){
    return (
      <div className='wrapper'>
        <navbar></navbar>
      <Hello name="홍길동">Hello React</Hello>
      </div>
      
    )
  }
}

export default App;
 
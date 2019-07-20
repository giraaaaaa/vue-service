import React,{Component} from 'react';
import './App.css';
import ZZido from './components/ZZido'
import MapExample from './components/MapExample'
import Search from './components/Search'
import Indexzido from './components/indexzido'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      keyword:"",

    }


  }




  // changeFuncSubmit(e){
  //   e.preventDefault() 
  //   let value =document.getElementById("iptValue").value;
  //   this.setState({
  //     keyword:value,
  //   })
  // }

  render(){
    return (
      <div className="App">
        {/* <ZZido/> */}
        {/* <form> 
            <input name="teddy" id="iptValue" type="text"/>
            <button type="text"  onClick={this.changeFuncSubmit}>전송!</button>
        </form> */}
        <MapExample />
        <Indexzido/>
        {/* <Search data ={this.state}/> */}
        
      </div>
  );
}
}

export default App;

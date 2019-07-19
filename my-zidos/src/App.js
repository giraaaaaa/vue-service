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
      keyword2:"",
      keyword:"",
      complete: false
    }
    this.changeFunc = this.changeFunc.bind(this)
    this.changeFuncSubmit = this.changeFuncSubmit.bind(this)

  }
    // 키워드 검색 완료 시 호출되는 콜백함수 입니다



//   kakao = (e) => {
//     const kakao = window.kakao
//     let kakaosearch = [];
//     var ps = new kakao.maps.services.Places(); 
//     kakaosearch = ps.keywordSearch(this.state.keyword, placesSearchCB); 
//   }
//   placesSearchCB = (data, status, pagination) => {
//     const kakao = window.kakao

//     if (status === kakao.maps.services.Status.OK) {

//         // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
//         // LatLngBounds 객체에 좌표를 추가합니다
//         var bounds = new kakao.maps.LatLngBounds();

//         for (var i=0; i<data.length; i++) {
//             displayMarker(data[i]);    
//             bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
//         }       
//         var map = new kakao.maps.Map(mapContainer, mapOption); 

//         // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
//         map.setBounds(bounds);
//     } 
// }
  changeFunc(e) {
    this.setState({
      keyword:e.target.value
    })
 } 
  changeFuncSubmit(e){
    e.preventDefault() 
    console.log(this.state)
    this.setState({
      keyword:this.state.keyword,
      complete:true,
    })
    //console.log(this.changeFuncSubmit)
    // this.props.onSubmit(this.state.keyword)
  }

  render(){
    return (
      <div className="App">
        {/* <ZZido/> */}
        <form> 
            <input name="teddy" type="text" onChange={this.changeFunc}/>
            <button type="text"  onClick={this.changeFuncSubmit}>전송!</button>
        </form>
        <MapExample />
        <Indexzido complete ={this.state.complete} keyword={this.state.keyword} />
        {/* <Search data ={this.state}/> */}
        
      </div>
  );
}
}

export default App;

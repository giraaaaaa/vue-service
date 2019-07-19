import React, {Component} from 'react'
import geolocation from 'react-geolocation'
class ZZido extends Component{
    componentDidMount(){
        const kakao = window.kakao;
        var container = document.getElementById('map'),
        options = {
             center: new kakao.maps.LatLng(33.450701, 126.570667),
             level: 3
        };
        var map = new kakao.maps.Map(container, options);
    }
    render(){
        return(
            <div id="map" style={{width:"500px", height:"400px"}}></div>
        )
    }
}

export default ZZido
import React, {Component} from 'react'


class indexzido extends Component{
    
    constructor(props){ 
        super(props)
         
        // this.state={
        //     keyword:this.props.keyword
        // }
       
        this.changeFuncSubmit = this.changeFuncSubmit.bind(this)
   
    }
    
    changeFuncSubmit(e){
        e.preventDefault() 
        var keyword = document.getElementById('keyword').value;
        this.setState({
        keyword2:keyword
        })
    }
     componentDidMount(){
        const kakao = window.kakao;
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        new kakao.maps.InfoWindow({zIndex:1});

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };  

        // 지도를 생성합니다    
        new kakao.maps.Map(mapContainer, mapOption); 
     }
    //  shouldComponentUpdate
    shouldComponentUpdate(newProps, newState){
        var place_name = null;
        let wedo = null;
        let gyeongdo = null;
        let japo = null;
        // 마커를 담을 배열입니다
        var markers = [];
  
        const kakao = window.kakao;
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places(); 

        // 키워드로 장소를 검색합니다
        searchPlaces();

        // 키워드 검색을 요청하는 함수입니다
        function searchPlaces() {

            var keyword = document.getElementById('keyword').value;

            if (!keyword.replace(/^\s+|\s+$/g, '')) {
                alert('키워드를 입력해주세요!');
                return false;
            }

            // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
            ps.keywordSearch(keyword, placesSearchCB);

        }


        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();

                for (var i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
          
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            } 
    

        }
        
        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {
         
            // 마커를 생성하고 지도에 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
            //목적지 좌표 확인


            //두 좌표간 거리구하기 
         
            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                
                place_name= place.place_name
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
                japo = marker.getPosition()
                wedo = japo.getLat();
                gyeongdo = japo.getLng();
                // cal_exe()
                calcDistance()
                // return place.place_name;
            });
        }
        function cal_exe(){
            var x1 = wedo;
            var y1 = 126.98633090000001;    
        
            var x2 = gyeongdo;
            var y2 = 37.563398;    
        
            var dis_x = x1 - x2;
            var dix_y = y1 - y2;

            let result1 = Math.sqrt(Math.abs(dis_x*dis_x) + Math.abs(dix_y*dix_y));
            // ${place.place_name} 
            console.log(`종로 비트캠프와 ${place_name} 사이의 거리는 ${result1}${1000}M 입니다.`  );
        }
        function calcDistance(){

            var EARTH_R, Rad, radLat1, radLat2, radDist; 
            var distance, ret;

            EARTH_R = 6371000.0;
            Rad 	= Math.PI/180;
            radLat1 = Rad * gyeongdo;
            radLat2 = Rad * 126.98633090000001;
            radDist = Rad * (wedo - 37.563398);
            
            distance = Math.sin(radLat1) * Math.sin(radLat2);
            distance = distance + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radDist);
            ret 	= EARTH_R * Math.acos(distance);

            var rtn = Math.round(Math.round(ret) / 1000);
           	if(rtn <= 0)
           	{
           		rtn = Math.round(ret) + " m";
           	}else
           	{
           		rtn = rtn + " km";
            }

            console.log(`현재위치와 ${place_name} 사이의 거리는 ${rtn} 입니다.`  );

            return  rtn;
        }

        return true;
    }


    
    render(){
 
        return(
            <div className="map_wrap">
             <div id="map" style={{width:"500px", height:"400px",position:"relative",overflow:"hidden"}}></div>
             <form> 
            <input name="second" id="keyword" type="text"/>
            <button type="text"  onClick={this.changeFuncSubmit}>검색!</button>

            </form>
            </div>
        )
    }
}

export default indexzido
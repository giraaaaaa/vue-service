import React,{Component} from'react'

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = { seconds: 0}
    }
    tick(){
        this.setState(state => ({
            seconds : state.seconds + 1
        }));
    }
    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }// vue에서 create와 비슷 처음 실행된 직후에 실행되는 메서드
    componentWillUnmount(){
        clearInterval(this.interval);
    }//컴포넌트가 DOM에서 삭제되기 직전에 실행되는 메서드 
    //이벤트 후 정리용처리나 타이머 취소등 DOM을 깔끔하게 사용하기위해 사용
    render(){
        return(
            <div>
                Seconds : {this.state.seconds}
            </div>
        )
    }
}

export default Timer
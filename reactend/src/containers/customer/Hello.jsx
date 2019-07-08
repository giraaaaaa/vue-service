import React, {Component} from 'react'
import ListNames from '../../components/ListNames'
const listdata = ['김연아','강감찬','유관순']

class Hello extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : '홍길동'
        }
    }
    render(){
        return(
                <div>
                    <ListNames data={listdata}/>>
                    <h1>{this.state.name}</h1>
                </div>
        )
    }       
    
}

export default Hello

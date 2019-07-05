import React, {Component} from 'react'
import {Figure,Table }   from 'react-bootstrap'
import Profile from '../assets/images/3oneyoung.png'
class Mypage extends Component{
    render(){
        return(
            <div>
                <Figure>
                    <Figure.Image
                        // width={171}
                        // height={180}
                        // alt="171x180"
                        src={Profile}
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
                <Table striped bordered hover>
                    {/* <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                        <td rowSpan='2' colSpan='2'>1</td>
                        <td>ID</td>
                        <td>이름</td>
                        </tr>
                        <tr>
                        <td>홍</td>
                        <td>길동쓰</td>
                        </tr>
                        <tr>
                        <td>전화번호</td>
                        <td colSpan="2">010-XX38-77XX</td>
                        
                        </tr>
                        <tr>
                        <td>도 시</td>
                        <td colSpan="2">서 울</td>
                        
                        </tr>
                    </tbody>
                    </Table>
            
            </div>
        )
    }
}

export default Mypage
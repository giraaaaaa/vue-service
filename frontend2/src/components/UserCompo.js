import React from 'react';
import PropTypes from 'prop-types';
import User from'../containers/User'
import {connect} from 'react-redux'
import * as actions from '../actions/UserAction'


const User = ({user}) =>{
   return(
       <div>
           <h2>User 컴포넌트</h2>
           <p>User : {user}</p>
       </div>
   )
}
const mapStateToProps = (state, ownProps)=>({
    user: ownProps.user
})
const mapDispatchToProps = dispatch =>({
    onMount(user){
        dispatch(actions.fetchUser(user))
    },
    onUpdate(user){
        dispatch(actions.fetchUser(user))
    }
})
User.propTypes = {
   user : PropTypes.string
}

User.defaultProps = {
   user : 'apple'
}

export default connect(mapStateToProps,mapDispatchToProps) (User);

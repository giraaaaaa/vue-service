import React from 'react'
import ProTypes from 'prop-types'

export default function User({user}){
    return(
        <div>
            <h2>User 컴포넌트</h2>
            <p>User : {user}</p>
        </div>
    )
}

User.protoType = {
    user: ProTypes.string,
    onMount: ProTypes.func.isRequired,
    onUpdate: ProTypes.func.isRequired
}

User.defaultProps = {
    //기본값으로 apple에 연결
    user:'apple'
}

export default User;
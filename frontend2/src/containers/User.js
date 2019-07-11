import React from 'react'
import ProTypes from 'prop-types'

export default function User({user}){
    return(
        <div>
            <h2>User 컴포넌트</h2>
            <p>User: {user}</p>
        </div>
    )
}

User.protoType = {
    user: ProTypes.string
}

User.defaultProps = {
    user:'apple'
}
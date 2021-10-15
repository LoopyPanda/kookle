import React from 'react'


const User = (props) => {
    
    console.log(props)


    return (
        <div>
            <p>Name: {props.name}</p>
            <p>E-Mail: {props.email}</p>
        </div>
    )
}

export default User;

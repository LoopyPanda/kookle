import React, {useState} from 'react'


const Message = (props) => {
    
    


    return (
        <div>
            <p>Name: {props.userId.name}</p>
            <p>Message: {props?.text}</p>
        </div>
    )
}

export default Message;

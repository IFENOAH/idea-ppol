import React from "react"

const TodoItem = ({text, onRemove}) => {
    return (  
        <li className = '' onClick = {onRemove}>{text}</li>
    )
}

export default TodoItem
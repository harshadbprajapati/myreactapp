import React from 'react'

const Topic = ({name, isCompleted}) => {
    return (
        <li className={isCompleted?"topic-completed":"topic-incomplete"}>
            {name} {isCompleted && '✔'}
        </li>
    )
}

export default Topic
import React from 'react'
import Topic from './Topic'

const TopicList = () => {
    return (
        <section>
            <h1>List of ReactJS Topics</h1>
            <ul>
                <Topic isCompleted={true} name="Class components" />
                <Topic isCompleted={true} name="Functional components" />
                <Topic isCompleted={true} name="JSX and Rendering" />
                <Topic isCompleted={false} name="Rendering List" />
            </ul>
        </section>
    )
}

export default TopicList
import React from 'react'
import Topic from './Topic'
import { topics } from '../data/data'

const TopicList = () => {
    const topicItems = topics.map(topic => (
        <Topic name={topic.name} isCompleted={topic.isCompleted} key={topic.id} />
    ));
    return (
        <section>
            <h1>List of ReactJS Topics</h1>
            <ul>
                {topicItems}
            </ul>
        </section>
    )
}

export default TopicList
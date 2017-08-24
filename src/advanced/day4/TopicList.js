import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const TopicList = (props) => {
    return (
        <ListGroup>{props.topics.map((topic, index) => {
            return <ListGroupItem 
                        key={index}
                        header={topic.title}
                        href={topic.link}
                        onClick={() => props.onTopicClick(topic.id)}>
                
                        {(topic.covered) ?
                            <span style={{textDecoration: 'line-through'}}>{topic.summary}</span>
                        :
                            <span>{topic.summary}</span>
                        }
                    </ListGroupItem>;
            })}
        </ListGroup>
    );
}

export default TopicList;

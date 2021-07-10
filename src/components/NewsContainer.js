import React, { useState } from 'react'
import { Header, Segment,Modal } from 'semantic-ui-react'
import PostDetail from './PostDetail';

export default function NewsContainer(props) {
    const [open, setOpen] = useState(false);
    return (
        <Segment.Group>
            {props.stories.map( (story, index) => {
                return <Modal key={index}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    trigger={<Segment key={index}>
                        <i className="heart icon heart-icon"></i>
                        <span className="score">{story.score}</span>
                        <a rel="noreferrer" target="_blank" href={story.url}>{story.title}</a>
                        <Header as="h4">By {story.by} {new Date(story.time * 1000).toLocaleDateString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric'
                        })}</Header>
                    </Segment>}
                >
                <PostDetail detail={story}></PostDetail>
                </Modal>
            })}        
        </Segment.Group>
    )
}
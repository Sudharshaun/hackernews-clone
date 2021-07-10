import React, { useState } from 'react'
import { Header, Segment,Modal,Button, Icon } from 'semantic-ui-react'

export default function NewsContainer(props) {
    const [postsOpened, setPostsOpened] = useState({});
    const handleModalState = (modalID, state) => {
        setPostsOpened({...postsOpened, [modalID]: state});
    }
    return (
        <Segment.Group>
            {props.stories.map( (story, index) => {
                return <Modal key={index}
                    open={postsOpened[story.id]}
                    onClose={() => handleModalState(story.id, false)}
                    onOpen={() => handleModalState(story.id, true)}
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
                    <Modal.Header>{story.title}</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            {story.title}
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            })}        
        </Segment.Group>
    )
}
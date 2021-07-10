import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react'

export default function ContentLoader() {
    return (
        <Segment>
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
    )
}
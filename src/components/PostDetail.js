import { useState } from "react";
import { Modal, Image } from "semantic-ui-react";

export default function PostDetail(props) {
    const detailData = props.detail;
    return (
        <>
            <Modal.Header>{detailData.title}</Modal.Header>
            <Modal.Content image scrolling>
                <Modal.Description>
                <p>
                    This is an example of expanded content that will cause the modal's
                    dimmer to scroll.
                </p>

                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image
                    src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                    style={{ marginBottom: 10 }}
                />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Modal.Description>
            </Modal.Content>
        </>
    )
}
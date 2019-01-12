import React from 'react'
import {Card, Col} from 'react-bootstrap'


const MediaItem = ({image}) => {


    return (
        <Col className="" md={3} xl={3} style={{paddingBottom: '15px'}}>
            <Card className="interactive">
                <Card.Img variant="top" src={image} className='img-fluid'/>
                <Card.Body>
                    <Card.Title className="interactive">Card title</Card.Title>
                    <Card.Text className="interactive">Card subtitle</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )

}

export default MediaItem




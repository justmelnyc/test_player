import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Controller from './components/Controller/Controller'
import PlayerWrapper from './components/PlayerWrapper'
import MediaItem from './components/MediaItem/MediaItem'
import Header from './components/Header/Header'
import './theme/main.scss'
import TitleSubtitle from './containers/Home/Home'

const image = 'http://commercial-song.net/wp-content/uploads/2018/02/Nike_Mercurial_Commercial.jpg'

const media = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 11, 11,11,11,1,1,1,3, 14]

const Browse = () => {
    return (
        <div className="flex-grow content">

            <Col xs={12} md={12} className="col-12 p-4">
                {/*<h3 className="text-white hidden-sm-down">Fixed-Fluid-Fixed <span*/}
                    {/*className="small">(Holy Grail Layout)</span>*/}
                {/*</h3>*/}
                <TitleSubtitle title="Made For You" subtitle='Your daily Mixes'/>
                <Row style={{paddingTop: '15px'}}> {media.map(item => {
                    return <MediaItem image={image}/>
                })} </Row>
            </Col>
        </div>
    )
}


const SidePanel = () => {
    return (
        <div className="">
            <PlayerWrapper/>

        </div>
    )
}


const Wrapper = ({children}) => {
    return (
        <Container fluid style={{padding: 0}} className="container-fluid h-100">
            <Row className="show-grid" style={{height: '100vh'}}>
                <Col className='fixed px-0 pt-0 ui-bg hot stretch' xs={4} md={4} style={{height: '100%', padding: 0}}>
                    <SidePanel/>
                </Col>
                <Col className='col fluid d-flex flex-column p-0' xs={8} md={8} style={{height: '100%', padding: 0}}>
                    <Header image={image}/>
                    <Browse/>
                </Col>
            </Row>
            <Row className="show-grid m-0">
                {children}
            </Row>
        </Container>
    )
}



const Main = () => {

    return (
        <Wrapper>
            <Controller/>
        </Wrapper>
    )

}

export default Main




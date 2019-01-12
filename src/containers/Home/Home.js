import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


import Container from '../../components/Container'
import TitleSubtitle from '../../components/TitleSubtitle'
import DataList from '../../components/DataList/DataList'
import {play} from '../../modules/player'
import {getMedia} from '../../modules/media'


const Home = (props) => {
    const {list} = props.media
    // const list = []

    return (
        <Container>
            <TitleSubtitle title="Made For You" subtitle='Your daily Mixes'/>
            <DataList data={list} play={props.play}/>
        </Container>
    )
}


const mapStateToProps = state => {
    return {media: state.media}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            play,
            getMedia
        },
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)


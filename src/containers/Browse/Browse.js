import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


// components
import Container from '../../components/Container'
import TitleSubtitle from '../../components/TitleSubtitle'
import {play} from '../../modules/player'
import {getMedia} from '../../modules/media'
import DataList from '../../components/DataList/DataList'


const Browse = (props) => {
    const {list} = props.media

    return (
        <Container>
            <TitleSubtitle title="Home"/>
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
)(Browse)


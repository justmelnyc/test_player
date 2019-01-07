import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


import Container from '../../components/Container'
import TitleSubtitle from '../../components/TitleSubtitle'
import DisplayList from '../../components/DisplayList'
import {getMedia} from '../../modules/media'
import {play} from '../../modules/player'


class Browse extends Component {
    componentDidMount() {
        this.props.getMedia()
    }

    render() {
        const {items} = this.props.media.list
        return (
            <Container>
                <TitleSubtitle title="Home"/>
                <DisplayList data={items} play={this.props.play}/>
            </Container>
        )
    }
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

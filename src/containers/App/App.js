import React, {Component} from 'react'
import {connect} from 'react-redux'

import {findDOMNode} from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ReactPlayer from 'react-player'

import {Col, Grid, Row} from 'react-bootstrap'

import screenfull from 'screenfull'

import '../../theme/main.scss'
import Settings from '../Settings/Settings'
import Browse from '../Browse/Browse'
import Home from '../Home/Home'

import Controls from '../../components/controls/Controls'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import PlayerWrapper from '../../components/PlayerWrapper'
import {bindActionCreators} from 'redux'
import {loopToggle, muteToggle, playToggle, togglePIP, toggleRemaining, toggleShuffle} from '../../modules/player'
import {getMedia} from '../../modules/media'
import Controller from '../../components/Controller/Controller'



class App extends Component {
    componentDidMount() {
        this.props.getMedia('media')
    }

    // load = url => {
    //     this.setState({
    //         url,
    //         played: 0,
    //         loaded: 0,
    //         pip: false
    //     })
    // }
    // playPause = () => {
    //     this.setState({playing: !this.state.playing})
    // }
    // pip = () => {
    //     this.setState({pip: !this.state.pip})
    // }

    // toggleLoop = () => {
    //     this.setState({loop: !this.state.loop})
    // }
    // setVolume = e => {
    //     this.setState({volume: parseFloat(e.target.value)})
    // }
    // toggleMuted = () => {
    //     this.setState({muted: !this.state.muted})
    // }
    // toggleRemaining = () => {
    //     this.setState({remaining: !this.state.remaining})
    // }
    setPlaybackRate = e => {
        this.setState({playbackRate: parseFloat(e.target.value)})
    }
    onPlay = () => {
        console.log('onPlay')
        this.setState({playing: true})
    }
    stop = () => {
        this.setState({url: null, playing: false})
    }
    // onEnablePIP = () => {
    //     console.log('onEnablePIP')
    //     this.setState({pip: true})
    // }
    // onDisablePIP = () => {
    //     console.log('onDisablePIP')
    //     this.setState({pip: false})
    // }
    onPause = () => {
        console.log('onPause')
        this.setState({playing: false})
    }
    onSeekMouseDown = e => {
        this.setState({seeking: true})
    }
    onSeekChange = e => {
        this.setState({played: parseFloat(e.target.value)})
    }
    onSeekMouseUp = e => {
        this.setState({seeking: false})
        this.player.seekTo(parseFloat(e.target.value))
    }
    onProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    }
    onEnded = () => {
        console.log('onEnded')
        this.setState({playing: this.state.loop})
    }
    onDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({duration})
    }
    onClickFullscreen = () => {
        screenfull.request(findDOMNode(this.player))
    }
    // renderLoadButton = (url, label) => {
    //     return (
    //         <button onClick={() => this.load(url)}>
    //             {label}
    //         </button>
    //     )
    // }
    ref = player => {
        this.player = player
    }

    render() {
        const {source, playing, duration, played, playbackRate, pip, volume, muted, playToggle, muteToggle, looped, loopToggle, remaining, toggleRemaining, shuffling, toggleShuffle, togglePIP} = this.props
        return (
            <Router>
                <Grid fluid style={{padding: 0}}>
                    <Row className="show-grid" style={{height: '100vh'}}>
                        <Col xs={3} md={3} style={{height: '100%', padding: 0}}>
                            <Sidebar>
                                <PlayerWrapper>
                                    <ReactPlayer
                                        ref={this.ref}
                                        className='react-player'
                                        width='100%'
                                        height='100%'
                                        url={source}
                                        pip={pip}
                                        playing={playing}
                                        loop={looped}
                                        playbackRate={playbackRate}
                                        volume={volume}
                                        muted={muted}
                                        onReady={() => console.log('onReady')}
                                        onStart={() => console.log('onStart')}
                                        onPlay={this.onPlay}
                                        onEnablePIP={this.onEnablePIP}
                                        onDisablePIP={this.onDisablePIP}
                                        onPause={this.onPause}
                                        onBuffer={() => console.log('onBuffer')}
                                        onSeek={e => console.log('onSeek', e)}
                                        onEnded={this.onEnded}
                                        onError={e => console.log('onError', e)}
                                        onProgress={this.onProgress}
                                        onDuration={this.onDuration}
                                    />


                                </PlayerWrapper>
                            </Sidebar>
                        </Col>
                        <Col xs={9} md={9} className="content">
                            <Header user={'user'}/>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/browse" component={Browse}/>
                                <Route exact path="/settings" component={Settings}/>

                                {/*<Route path="/login" component={Login}/>*/}
                                {/*<PrivateRoute path="/RecentSongs" component={HomePage} user={user}/>*/}
                                {/*<Route path="/AlbumsPage" component={AlbumsPage} user={user}/>*/}

                                {/*<PrivateRoute path="/AboutPage" component={AboutPage} user={user}/>*/}
                                {/*<Route path="/SongsPage" component={SongsPage} user={user}/>*/}
                            </Switch>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={12} style={{height: '80px'}}>
                            <Controller
                                duration={duration}
                                played={played}
                                volume={volume}
                                muted={muted}
                                shuffling={shuffling}
                                toggleShuffle={toggleShuffle}
                                loop={looped}
                                playing={playing}
                                remaining={remaining}
                                playPause={playToggle}
                                toggleRemaining={toggleRemaining}
                                toggleMuted={muteToggle}
                                togglePIP={togglePIP}
                                toggleLoop={loopToggle}
                                onMouseDown={this.onSeekMouseDown}
                                onChange={this.onSeekChange}
                                onMouseUp={this.onSeekMouseUp}
                                pip={pip}
                            >
                            </Controller>
                        </Col>
                    </Row>
                </Grid>
            </Router>

        )
    }
}

const mapStateToProps = state => {
    const {source, playing, duration, volume, muted, looped, remaining, shuffling, pip, playbackRate, loaded, played} = state.player
    return {source, playing, duration, volume, muted, looped, remaining, shuffling, pip, playbackRate, loaded, played}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getMedia,
            playToggle,
            muteToggle,
            loopToggle,
            toggleRemaining,
            toggleShuffle,
            togglePIP

        },
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

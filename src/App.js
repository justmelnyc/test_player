import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Col, Grid, Row} from 'react-bootstrap'

import screenfull from 'screenfull'

import './theme/main.scss'

import ReactPlayer from 'react-player'
import Duration from './components/Durantion'
import Controls from './components/Controls'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import HomePage from './containers/HomePage'
import PlayerWrapper from './components/PlayerWrapper'

// json-server --watch db.json --port 4200

const MULTIPLE_SOURCES = [
    {src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', type: 'video/mp4'},
    {src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv', type: 'video/ogv'},
    {src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm', type: 'video/webm'}
]

const user = {
    isLoggedIn: true,
    tokenRequested: false,
    tokenSuccess: false,
    user: {
        country: 'US',
        display_name: 'Melvin Antonio Pacheco',
        email: 'mdashpacheco@gmail.com',
        external_urls: {
            spotify: 'https://open.spotify.com/user/mdashpacheco'
        },
        followers: {
            href: null,
            total: 0
        },
        href: 'https://api.spotify.com/v1/users/mdashpacheco',
        id: 'mdashpacheco',
        images: [
            {
                height: null,
                url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c42.42.520.520a/s200x200/12602_521695107849003_2058493516_n.jpg?_nc_cat=110&_nc_ht=scontent.xx&oh=c6373360dee2fa233c1dbf0a1f6f2413&oe=5C983469',
                width: null
            }
        ],
        product: 'premium',
        type: 'user',
        uri: 'spotify:user:mdashpacheco'
    },
    token: 'BQADuAPNfdVWmlAuFYDwa33jEqMOo82Ev59AZX046kKcezbGvzbepGw_4JFYw0L7h8tw2mRxDF8ytFXu_pXlvvw4iQV6ZrZSeaPW_6FqmYfdMkYOTCHvjzNtx_sHAjaMQl5DWnfhDdyzl-cslvehm3ChBo4L-YZ8h4n9N9cPDePHw5dH9uW0qEGQFfaGqhk3Bs6p8LAYxZtcIIM14WFExBE8UQxZ2sP8Mb353msTLMPAAiT_waITLfeefOhOVCcGIMwwVK-NN5jvfo2Xp1KJ',
    error: null
}

class App extends Component {
    state = {
        url: null,
        pip: false,
        playing: true,
        volume: 0.8,
        muted: true,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        remaining: false
    }
    load = url => {
        this.setState({
            url,
            played: 0,
            loaded: 0,
            pip: false
        })
    }
    playPause = () => {
        this.setState({playing: !this.state.playing})
    }
    pip = () => {
        this.setState({pip: !this.state.pip})
    }
    stop = () => {
        this.setState({url: null, playing: false})
    }
    toggleLoop = () => {
        this.setState({loop: !this.state.loop})
    }
    setVolume = e => {
        this.setState({volume: parseFloat(e.target.value)})
    }
    toggleMuted = () => {
        this.setState({muted: !this.state.muted})
    }
    toggleRemaining = () => {
        this.setState({remaining: !this.state.remaining})
    }
    setPlaybackRate = e => {
        this.setState({playbackRate: parseFloat(e.target.value)})
    }
    onPlay = () => {
        console.log('onPlay')
        this.setState({playing: true})
    }
    onEnablePIP = () => {
        console.log('onEnablePIP')
        this.setState({pip: true})
    }
    onDisablePIP = () => {
        console.log('onDisablePIP')
        this.setState({pip: false})
    }
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
    renderLoadButton = (url, label) => {
        return (
            <button onClick={() => this.load(url)}>
                {label}
            </button>
        )
    }
    ref = player => {
        this.player = player
    }

    render() {
        const {url, playing, volume, muted, loop, played, loaded, duration, playbackRate, pip, remaining} = this.state
        // const SEPARATOR = ' · '

        return (
            <Router>
                <Grid fluid style={{padding: 0}}>
                    <Row className="show-grid" style={{height: '100vh'}}>
                        <Col xs={2} md={2} style={{height: '100%', padding: 0}}>
                            <Sidebar>
                                <PlayerWrapper>
                                    <ReactPlayer
                                        ref={this.ref}
                                        className='react-player'
                                        width='100%'
                                        height='100%'
                                        url={url}
                                        pip={pip}
                                        playing={playing}
                                        loop={loop}
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
                                    {this.renderLoadButton('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', 'mp4')}

                                </PlayerWrapper>
                            </Sidebar>
                        </Col>
                        <Col xs={10} md={10} className="content">
                            <Header user={user}/>
                            <Route exact path="/" component={HomePage} user={user}/>
                            {/*<Route path="/login" component={Login}/>*/}
                            {/*<PrivateRoute path="/RecentSongs" component={HomePage} user={user}/>*/}
                            {/*<Route path="/AlbumsPage" component={AlbumsPage} user={user}/>*/}

                            {/*<PrivateRoute path="/AboutPage" component={AboutPage} user={user}/>*/}
                            {/*<Route path="/SongsPage" component={SongsPage} user={user}/>*/}
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={12} style={{height: '85px'}}>
                            <Controls
                                duration={duration}
                                played={played}
                                volume={volume}
                                muted={muted}
                                loop={loop}
                                playing={playing}
                                remaining={remaining}
                                playPause={this.playPause}
                                toggleRemaining={this.toggleRemaining}
                                toggleMuted={this.toggleMuted}
                                toggleLoop={this.toggleLoop}

                                onMouseDown={this.onSeekMouseDown}
                                onChange={this.onSeekChange}
                                onMouseUp={this.onSeekMouseUp}
                            >
                            </Controls>
                        </Col>
                    </Row>
                </Grid>
            </Router>

        )
    }
}

export default App

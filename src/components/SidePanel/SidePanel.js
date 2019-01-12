import React from 'react'
import {bindActionCreators} from 'redux'
import {getMedia} from '../../modules/media'
import {loopToggle, muteToggle, playToggle, togglePIP, toggleRemaining, toggleShuffle} from '../../modules/player'
import {connect} from 'react-redux'
import ReactPlayer from '../../containers/App/App'
import PlayerWrapper from '../PlayerWrapper'
import Navigator from '../Navigator/Navigator'

const media = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 11, 11,11,11,1,1,1,3, 14]
const SidePanel = ({source, playing, duration, played, playbackRate, pip, volume, muted, playToggle, muteToggle, looped, loopToggle, remaining, toggleRemaining, shuffling, toggleShuffle, togglePIP}) => {
    // const {source, playing, duration, played, playbackRate, pip, volume, muted, playToggle, muteToggle, looped, loopToggle, remaining, toggleRemaining, shuffling, toggleShuffle, togglePIP} = this.props

    return (
        <div className='SidePanel'>
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

            <Navigator list={media}/>
        </div>

    )

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
)(SidePanel)

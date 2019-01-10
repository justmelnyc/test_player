import React from 'react'
import Current from './Current'
import Duration from './Durantion'


function Controller({playing, played, duration, volume, muted, loop, remaining, shuffling, pip}) {

    return (
        <div className="Root__now-playing-bar">
            <footer className="now-playing-bar-container">
                <div className="now-playing-bar">
                    <div className="now-playing-bar__left">
                        <Current />
                    </div>
                    <div className="now-playing-bar__center">
                        <div className="player-controls" dir="ltr">
                            <div className="player-controls__buttons">
                                <button
                                    // onClick={toggleShuffle}
                                    className={'control-button spoticon-shuffle-16 interactive ' + (shuffling ? 'control-button--active control-button--active-dot' : '')}
                                    title="Enable shuffle"/>


                                <button className="control-button spoticon-skip-back-16 interactive" title="Previous"/>


                                <button
                                    // onClick={playPause}
                                    className={'control-button control-button--circled interactive ' + (playing ? 'spoticon-pause-16' : 'spoticon-play-16')}
                                    title={playing ? 'Pause' : 'Play'}/>


                                <button className={'control-button spoticon-skip-forward-16 interactive'} title="Next"/>
                                <button
                                    // onClick={toggleLoop}
                                    className={'control-button spoticon-repeat-16 interactive ' + (loop ? 'control-button--active control-button--active-dot' : '')}
                                    title="Enable repeat"/>
                            </div>
                            <div className="playback-bar">
                                <div className="playback-bar__progress-time">
                                    <Duration seconds={duration * played}/>
                                </div>
                                <div className="progress-bar">
                                    <div className="middle-align progress-bar__bg interactive">
                                        <div className="progress-bar__fg" style={{width: `${played * 100}%`}}/>
                                    </div>
                                </div>
                                <div
                                    className="playback-bar__progress-time interactive"
                                    // onClick={toggleRemaining}
                                >
                                    {remaining ? <Duration seconds={duration * (1 - played)}/> :
                                        <Duration seconds={duration}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="now-playing-bar__right">
                        <div className="now-playing-bar__right__inner">
                            <div className="ExtraControls">
                                <div className="GlueDropTarget">
                                    <button className="control-button spoticon-queue-16 interactive" title="Queue"/>
                                </div>
                                <div className="ExtraControls__connect-device-picker"><span
                                    className="connect-device-picker">
                                        <button
                                            // onClick={togglePIP}
                                            className={'spoticon-devices-16 control-button interactive ' + (pip ? 'control-button--active' : '')}
                                            aria-label="Connect to a device"/></span></div>
                                <div className="volume-bar" dir="ltr">
                                    <button
                                        // onClick={toggleMuted}
                                        className={'control-button interactive ' + (muted ? 'spoticon-volume-off-16' : 'spoticon-volume-16')}
                                    />


                                    <div className="progress-bar">
                                        <div className="middle-align progress-bar__bg">
                                            <div className="progress-bar__fg interactive"
                                                 style={{width: `${volume * 100}%`}}/>
                                        </div>
                                    </div>

                                    <button
                                        // onClick={toggleMuted}
                                        className={'control-button interactive ' + (muted ? 'spoticon-fullscreen-16' : 'spoticon-minimise-16')}
                                    />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default Controller

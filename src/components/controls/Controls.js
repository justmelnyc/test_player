import React from 'react'
import Duration from '../utilities/Durantion'
import profile from '../../media/profile.png'


function Controls({playing, played, duration, volume, muted, loop, remaining, toggleMuted, toggleRemaining, playPause, toggleLoop, shuffling, toggleShuffle, togglePIP, pip}) {

    return (
        <div className="Root__now-playing-bar">
            <footer className="now-playing-bar-container">
                <div className="now-playing-bar">
                    <div className="now-playing-bar__left">
                        <div className="now-playing">
                            <span className="now-playing__widget-overlay" draggable="true"><a
                                aria-label="Now playing: Que No Muera El Son by Papaito"
                                href="/playlist/2npnAJteSVEXZVRL4gg59i" style={{border: 'none'}}><div
                                className="now-playing__cover-art"><div className="cover-art shadow" aria-hidden="true"
                                                                        style={{width: '56px', height: '56px'}}>test<div><div
                                className="icon">
                                <svg width={80} height={81} viewBox="0 0 80 81"
                                     xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path
                                    d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
                                    fill="currentColor" fillRule="evenodd"/></svg></div><div
                                className="cover-art-image cover-art-image-loaded"
                                style={{backgroundImage: `url(${profile})`}}/></div></div></div></a></span>
                            <div className="track-info ellipsis-one-line">
                                <div className="track-info__name ellipsis-one-line" dir="auto">
                                    <div className="react-contextmenu-wrapper"><span draggable="true"><a
                                        href="/album/7AxV7VNigVBpwYZUQ9vpIX">Que No Muera El Son</a></span></div>
                                </div>
                                <div className="track-info__artists ellipsis-one-line" dir="auto"><span><span
                                    className="react-contextmenu-wrapper"><span draggable="true"><a
                                    href="/artist/7AkZMhVpxGUpGDQd7ZIrig">Papaito</a></span></span></span></div>
                            </div>
                            {/*<button className="control-button spoticon-added-16 control-button--active"*/}
                            {/*title="Remove from Your Library"/>*/}
                            <button className="control-button spoticon-add-16"
                                    title="Save to Your Library"/>
                        </div>
                    </div>
                    <div className="now-playing-bar__center">
                        <div className="player-controls" dir="ltr">
                            <div className="player-controls__buttons">
                                <button
                                    onClick={toggleShuffle}
                                    className={'control-button spoticon-shuffle-16 interactive ' + (shuffling ? 'control-button--active control-button--active-dot' : '')}
                                    title="Enable shuffle"/>


                                <button className="control-button spoticon-skip-back-16 interactive" title="Previous"/>


                                <button
                                    onClick={playPause}
                                    className={'control-button control-button--circled interactive ' + (playing ? 'spoticon-pause-16' : 'spoticon-play-16')}
                                    title={playing ? 'Pause' : 'Play'}/>


                                <button className={'control-button spoticon-skip-forward-16 interactive'} title="Next"/>
                                <button
                                    onClick={toggleLoop}
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
                                    onClick={toggleRemaining}
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
                                            onClick={togglePIP}
                                            className={'spoticon-devices-16 control-button interactive ' + (pip ? 'control-button--active' : '')}
                                            aria-label="Connect to a device"/></span></div>
                                <div className="volume-bar" dir="ltr">
                                    <button
                                        onClick={toggleMuted}
                                        className={'control-button interactive ' + (muted ? 'spoticon-volume-off-16' : 'spoticon-volume-16')}
                                    />


                                    <div className="progress-bar">
                                        <div className="middle-align progress-bar__bg">
                                            <div className="progress-bar__fg interactive"
                                                 style={{width: `${volume * 100}%`}}/>
                                        </div>
                                    </div>

                                    <button
                                        onClick={toggleMuted}
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

export default Controls

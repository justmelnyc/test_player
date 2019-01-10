import React from 'react'
import Interactive from 'react-interactive'


const DataItem = ({track, onClick, current}) => {


    return (
        <div
            key={track._id}
            className="signal-col-xs-6 signal-col-sm-4 signal-col-md-3 signal-col-xl-2">
            <div className="media-object" style={{
                maxWidth: 450
            }}>
                <div className="media-object-hoverable">
                    <div className="react-contextmenu-wrapper">
                        <div className="cover-art shadow actionable" aria-hidden="true"

                             onClick={onClick}>
                            <div>
                                {current === parseInt(track._id)
                                    ?
                                    <div className="cover-art-image cover-art-image-loaded clickable no-drag"
                                         style={{
                                             borderStyle: 'solid',
                                             borderColor: 'white',
                                             borderWidth: 2,
                                             backgroundImage: `url(${track.poster})`
                                         }}/>
                                    :
                                    <Interactive
                                        className="cover-art-image cover-art-image-loaded clickable no-drag"
                                        as="div"
                                        normal={{backgroundImage: `url(${track.image})`}}
                                        hover={{backgroundImage: `url(${track.poster})`}}
                                        active="hover" // use the hover state style for the active state
                                        style={{}}
                                        // onClick={this.handleClick}
                                        // onStateChange={this.handleInteractiveStateChange}
                                    />

                                }

                            </div>
                            <button className="cover-art-playback" style={{backgroundColor: 'white'}}>
                                <svg className="icon-play" viewBox="0 0 85 100">
                                    <path fill="black"
                                          d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mo-info">
                        <div className="react-contextmenu-wrapper">
                            {current === track._id
                                ?
                                <p className="mo-info-name track-name clickable no-drag"
                                   style={{
                                       color: 'white'
                                   }}
                                   title={track.artist}>{track.artist}</p>
                                :
                                <p className="mo-info-name track-name signal-text clickable no-drag"
                                   title={track.artist}>{track.artist}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="mo-meta ellipsis-one-line clickable no-drag">
            <span>
              <p className='track-meta'>{track.slug.toUpperCase()}</p>
            </span>
                </div>
            </div>
        </div>

    )

}

export default DataItem

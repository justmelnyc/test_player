import React from 'react'

const Current = () => {


    return (
        <div className="now-playing">
            <span className="now-playing__widget-overlay" draggable="true">
                <a aria-label="Now playing: Que No Muera El Son by Papaito"
                   href="/playlist/2npnAJteSVEXZVRL4gg59i"
                   style={{border: 'none'}}>
                    <div className="now-playing__cover-art">
                        <div className="cover-art shadow"
                             aria-hidden="true"
                             style={{width: '56px', height: '56px'}}>
                            <div>
                                <div className="icon">
                                    <svg width={80} height={81} viewBox="0 0 80 81"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <title>Playlist Icon</title>
                                    <path
                                        d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
                                        fill="currentColor" fillRule="evenodd"/>
                                    </svg>
                                </div>
                                <div className="cover-art-image cover-art-image-loaded"
                                     style={{backgroundImage: `url(http://commercial-song.net/wp-content/uploads/2018/02/Nike_Mercurial_Commercial.jpg)`}}/>
                                </div>
                                </div>
                            </div>
                        </a>
                    </span>
            <div className="track-info ellipsis-one-line">
                <div className="track-info__name ellipsis-one-line" dir="auto">
                    <div className="react-contextmenu-wrapper">
                        <span draggable="true">
                            <a href="/album/7AxV7VNigVBpwYZUQ9vpIX">Nike Mercurial</a>
                        </span>
                    </div>
                </div>
                <div className="track-info__artists ellipsis-one-line" dir="auto">
                    <span>
                        <span className="react-contextmenu-wrapper">
                            <span draggable="true">
                                <a href="/artist/7AkZMhVpxGUpGDQd7ZIrig">Local Media</a>
                            </span>
                        </span>
                    </span>
                </div>
            </div>
            {/*<button className="control-button spoticon-added-16 control-button--active"*/}
            {/*title="Remove from Your Library"/>*/}
            <button className="control-button spoticon-add-16"
                    title="Save to Your Library"/>
        </div>
    )

}

export default Current

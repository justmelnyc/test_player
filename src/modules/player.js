export const OPERATE = 'player/OPERATE'
export const FULLSCREEN_CHANGE = 'player/FULLSCREEN_CHANGE'
export const PLAYER_ACTIVATE = 'player/PLAYER_ACTIVATE'
export const USER_ACTIVATE = 'player/USER_ACTIVATE'
export const LOAD_START = 'player/LOAD_START'
export const CAN_PLAY = 'player/CAN_PLAY'
export const WAITING = 'player/WAITING'
export const CAN_PLAY_THROUGH = 'player/CAN_PLAY_THROUGH'
export const PLAYING = 'player/PLAYING'
export const PLAY = 'player/PLAY'
export const PAUSE = 'player/PAUSE'
export const END = 'player/END'
export const MUTE = 'player/MUTE'
export const UNMUTE = 'player/UNMUTE'
export const LOOP = 'player/LOOP'
export const UNLOOP = 'player/UNLOOP'
export const SHUFFLE = 'player/SHUFFLE'
export const UNSHUFFLE = 'player/UNSHUFFLE'
export const ENABLEPIP = 'player/ENABLEPIP'
export const DISABLEPIP = 'player/DISABLEPIP'
export const SEEKING = 'player/SEEKING'
export const SEEKED = 'player/SEEKED'
export const SEEKING_TIME = 'player/SEEKING_TIME'
export const END_SEEKING = 'player/END_SEEKING'
export const DURATION_CHANGE = 'player/DURATION_CHANGE'
export const TIME_UPDATE = 'player/TIME_UPDATE'
export const VOLUME_CHANGE = 'player/VOLUME_CHANGE'
export const PROGRESS_CHANGE = 'player/PROGRESS_CHANGE'
export const RATE_CHANGE = 'player/RATE_CHANGE'
export const SHOW_REMAINDER = 'player/SHOW_REMAINDER'
export const SHOW_DURATION = 'player/SHOW_DURATION'
export const SUSPEND = 'player/SUSPEND'
export const ABORT = 'player/ABORT'
export const EMPTIED = 'player/EMPTIED'
export const STALLED = 'player/STALLED'
export const LOADED_META_DATA = 'player/LOADED_META_DATA'
export const LOADED_DATA = 'player/LOADED_DATA'
export const RESIZE = 'player/RESIZE'
export const ERROR = 'player/ERROR'

const initialState = {
    source: null,
    duration: 0,
    currentTime: 0,
    seekingTime: 0,
    buffered: null,
    waiting: false,
    seeking: false,
    playing: false,
    loop: false,
    shuffling: false,
    paused: true,
    autoPaused: false,
    ended: false,
    muted: true,
    pip: false,
    volume: 0.8,
    played: 0,
    loaded: 0,
    playbackRate: 1.0,
    readyState: 0,
    networkState: 0,
    videoWidth: 0,
    videoHeight: 0,
    hasStarted: false,
    userActivity: true,
    isActive: false,
    isFullscreen: false,
    remaining: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTIVATE:
            return {
                ...state,
                userActivity: action.activity
            }
        case PLAYER_ACTIVATE:
            return {
                ...state,
                isActive: action.activity
            }
        case FULLSCREEN_CHANGE:
            return {
                ...state,
                isFullscreen: !!action.isFullscreen,
            }
        case SEEKING_TIME:
            return {
                ...state,
                seekingTime: action.time
            }
        case END_SEEKING:
            return {
                ...state,
                seekingTime: 0,
            }
        case LOAD_START:
            return {
                ...state,
                ...action.videoProps,
                hasStarted: false,
                ended: false,
            }
        case CAN_PLAY:
            return {
                ...state,
                ...action.videoProps,
                waiting: false,
            }
        case WAITING:
            return {
                ...state,
                ...action.videoProps,
                waiting: true
            }
        case CAN_PLAY_THROUGH:
        case PLAYING:
            return {
                ...state,
                ...action.videoProps,
                waiting: false
            }
        case PLAY:
            return {
                ...state,
                ...action.videoProps,
                source: action.source,
                playing: true,
                ended: false,
                paused: false,
                autoPaused: false,
                waiting: false,
                hasStarted: true,
            }
        case PAUSE:
            return {
                ...state,
                ...action.videoProps,
                paused: true,
                playing: false,

            }
        case END:
            return {
                ...state,
                ...action.videoProps,
                ended: true
            }
        case SEEKING:
            return {
                ...state,
                ...action.videoProps,
                seeking: true
            }
        case SEEKED:
            return {
                ...state,
                ...action.videoProps,
                seeking: false
            }
        case MUTE:
            return {
                ...state,
                muted: true
            }
        case UNMUTE:
            return {
                ...state,
                muted: false
            }
        case LOOP:
            return {
                ...state,
                looped: true
            }
        case UNLOOP:
            return {
                ...state,
                looped: false
            }
        case SHUFFLE:
            return {
                ...state,
                shuffling: true
            }
        case UNSHUFFLE:
            return {
                ...state,
                shuffling: false
            }
        case ENABLEPIP:
            return {
                ...state,
                pip: true
            }
        case DISABLEPIP:
            return {
                ...state,
                pip: false
            }
        case SHOW_DURATION:
            return {
                ...state,
                remaining: false
            }
        case SHOW_REMAINDER:
            return {
                ...state,
                remaining: true
            }
        case ERROR:
            return {
                ...state,
                ...action.videoProps,
                error: 'UNKNOWN ERROR',
                ended: true
            }
        case DURATION_CHANGE:
        case TIME_UPDATE:
        case VOLUME_CHANGE:
        case PROGRESS_CHANGE:
        case RATE_CHANGE:
        case SUSPEND:
        case ABORT:
        case EMPTIED:
        case STALLED:
        case LOADED_META_DATA:
        case LOADED_DATA:
        case RESIZE:
            const newState = {
                ...state,
                ...action.videoProps,
            }
            if (action.videoProps.paused === false) {
                newState.hasStarted = true
                newState.waiting = false
            }
            return newState
        default:
            return state
    }
}

export const playToggle = () => {
    return (dispatch, getState) => {
        const {playing, source} = getState().player
        console.log(playing, source)
        playing ? dispatch(pause()) : dispatch(play(source))
    }
}

export const play = (source) => {
    return {
        type: PLAY,
        source
    }
}

export const pause = () => {
    return {
        type: PAUSE
    }
}


export const muteToggle = () => {
    return (dispatch, getState) => {
        const {muted} = getState().player
        muted ? dispatch(unmute()) : dispatch(mute())
    }
}
export const mute = () => {
    return {
        type: MUTE
    }
}

export const unmute = () => {
    return {
        type: UNMUTE
    }
}


export const loopToggle = () => {
    return (dispatch, getState) => {
        const {looped} = getState().player
        looped ? dispatch(unloop()) : dispatch(loop())
    }
}
export const loop = () => {
    return {
        type: LOOP
    }
}

export const unloop = () => {
    return {
        type: UNLOOP
    }
}


export const toggleRemaining = () => {
    return (dispatch, getState) => {
        const {remaining} = getState().player
        remaining ? dispatch(duration()) : dispatch(remainder())
    }
}
export const duration = () => {
    return {
        type: SHOW_DURATION
    }
}

export const remainder = () => {
    return {
        type: SHOW_REMAINDER
    }
}

export const toggleShuffle = () => {
    return (dispatch, getState) => {
        const {shuffling} = getState().player
        shuffling ? dispatch(unshuffle()) : dispatch(shuffle())
    }
}
export const shuffle = () => {
    return {
        type: SHUFFLE
    }
}

export const unshuffle = () => {
    return {
        type: UNSHUFFLE
    }
}

export const togglePIP = () => {
    return (dispatch, getState) => {
        const {pip} = getState().player
        pip ? dispatch(disablePIP()) : dispatch(enablePIP())
    }
}

export const enablePIP = () => {
    console.log('onEnablePIP')
    return {
        type: ENABLEPIP
    }
}
export const disablePIP = () => {
    console.log('onDisablePIP')
    return {
        type: DISABLEPIP
    }
}

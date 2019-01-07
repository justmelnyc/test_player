import media from '../apis/media'
import {fetchMediaError, fetchMediaSuccess, MEDIA_FETCH_REQUEST, MEDIA_FETCH_SUCCESS} from './media'

export const OPERATE = 'video-react/OPERATE';
export const FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
export const PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
export const USER_ACTIVATE = 'video-react/USER_ACTIVATE';
export const LOAD_START = 'video-react/LOAD_START';
export const CAN_PLAY = 'video-react/CAN_PLAY';
export const WAITING = 'video-react/WAITING';
export const CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
export const PLAYING = 'video-react/PLAYING';
export const PLAY = 'video-react/PLAY';
export const PAUSE = 'video-react/PAUSE';
export const END = 'video-react/END';
export const SEEKING = 'video-react/SEEKING';
export const SEEKED = 'video-react/SEEKED';
export const SEEKING_TIME = 'video-react/SEEKING_TIME';
export const END_SEEKING = 'video-react/END_SEEKING';
export const DURATION_CHANGE = 'video-react/DURATION_CHANGE';
export const TIME_UPDATE = 'video-react/TIME_UPDATE';
export const VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
export const PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
export const RATE_CHANGE = 'video-react/RATE_CHANGE';
export const SUSPEND = 'video-react/SUSPEND';
export const ABORT = 'video-react/ABORT';
export const EMPTIED = 'video-react/EMPTIED';
export const STALLED = 'video-react/STALLED';
export const LOADED_META_DATA = 'video-react/LOADED_META_DATA';
export const LOADED_DATA = 'video-react/LOADED_DATA';
export const RESIZE = 'video-react/RESIZE';
export const ERROR = 'video-react/ERROR';

const initialState = {
    currentSrc: null,
    duration: 0,
    currentTime: 0,
    seekingTime: 0,
    buffered: null,
    waiting: false,
    seeking: false,
    paused: true,
    autoPaused: false,
    ended: false,
    playbackRate: 1,
    muted: false,
    volume: 1,
    readyState: 0,
    networkState: 0,
    videoWidth: 0,
    videoHeight: 0,
    hasStarted: false,
    userActivity: true,
    isActive: false,
    isFullscreen: false,
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
                currentSrc: action.source,
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
                paused: true
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

export const play = (source) => {
    return {
        type: PLAY,
        source
    }
}

import media from '../apis/media'

export const MEDIA_FETCH_REQUEST = 'media/FETCH_REQUEST'
export const MEDIA_FETCH_SUCCESS = 'media/FETCH_SUCCESS'
export const MEDIA_FETCH_ERROR = 'media/FETCH_ERROR'


const initialState = {
    list: [],
    isFetching: false,
    hasFetched: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MEDIA_FETCH_REQUEST:
            return {...state, isFetching: true}
        case MEDIA_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                hasFetched: true,
                list: action.albums
            }
        case MEDIA_FETCH_ERROR:
            return {...state, isFetching: false, error: action.albums.list}
        default:
            return state
    }
};


export function fetchMedia() {
    return {
        type: MEDIA_FETCH_REQUEST
    }
}

export function fetchMediaSuccess(albums) {
    return {
        type: MEDIA_FETCH_SUCCESS,
        albums
    }
}

export function fetchMediaError(err) {
    return {
        type: MEDIA_FETCH_ERROR,
        err
    }
}


export const getMedia = () => async dispatch => {
    const response = await media.get('/albums')
    const {list} = response.data
    try {
        dispatch(fetchMediaSuccess(list))
    } catch (err) {
        dispatch(fetchMediaError(err))
    }


}

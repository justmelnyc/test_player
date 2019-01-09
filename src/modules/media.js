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
                list: action.resource
            }
        case MEDIA_FETCH_ERROR:
            return {...state, isFetching: false, error: action.resource.list}
        default:
            return state
    }
};


export function fetchMedia() {
    return {
        type: MEDIA_FETCH_REQUEST
    }
}

export function fetchMediaSuccess(resource) {
    return {
        type: MEDIA_FETCH_SUCCESS,
        resource
    }
}

export function fetchMediaError(err) {
    return {
        type: MEDIA_FETCH_ERROR,
        err
    }
}


export const getMedia = (resource) => async dispatch => {
    const response = await media.get(`/${resource}`)
    const {data} = response
    try {
        dispatch(fetchMediaSuccess(data))
    } catch (err) {
        dispatch(fetchMediaError(err))
    }


}

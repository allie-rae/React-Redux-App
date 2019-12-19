import {
    FETCHING_CAT_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL
} from '../actions'


const initialState = {
    catFact: '',
    error: '',
    isFetching: false
}


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CAT_DATA:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                catFact: action.payload,
                isFetching: false
            }
        case FETCH_DATA_FAIL:
            return {
                ...state,
                error: 'Mayday mayday'
            }
        default:
            return state;
    }
}
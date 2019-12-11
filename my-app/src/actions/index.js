import axios from 'axios'

export const FETCHING_CAT_DATA = "FETCHING_CAT_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL"


export const getCatFact = () => dispatch => {
    dispatch({type: FETCHING_CAT_DATA})
    axios.get('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/')
    .then(response => console.log(response), dispatch({type: FETCH_DATA_SUCCESS, payload: response.data.all}))
    .catch(err => console.log(err), dispatch({type: FETCH_DATA_FAIL, payload: err}))
}

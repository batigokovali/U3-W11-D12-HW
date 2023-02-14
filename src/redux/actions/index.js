export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_LOADING = 'GET_JOBS_LOADING'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'

export const addToFavoritesAction = (data) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: data,
    }
}

export const removeFromFavoritesAction = (i) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: i,
    }
}

export const getJobsActionAsync = (query) => {
    return async (dispatch, getState) => {
        const baseEndpoint =
            "https://strive-benchmark.herokuapp.com/api/jobs?search=";
        try {
            let resp = await fetch(baseEndpoint + query + "&limit=20");
            if (resp.ok) {
                let fetchedJobs = await resp.json();
                dispatch({
                    type: GET_JOBS,
                    payload: fetchedJobs,
                })
                dispatch({
                    type: GET_JOBS_LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: GET_JOBS_LOADING,
                    payload: false,
                })
                dispatch({
                    type: GET_JOBS_ERROR,
                    payload: true,
                })
            }
        } catch (error) {
            dispatch({
                type: GET_JOBS_LOADING,
                payload: false,
            })
            dispatch({
                type: GET_JOBS_ERROR,
                payload: true,
            })
        }
    }
}
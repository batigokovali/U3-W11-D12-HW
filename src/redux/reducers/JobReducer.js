import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../actions";

const initialState = {
    stock: [],
    isLoading: false,
    isError: false,
}

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                stock: action.payload,
            }

        case GET_JOBS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        case GET_JOBS_ERROR:
            return {
                ...state,
                isError: action.payload,
            }
        default:
            return state
    }
}

export default jobReducer
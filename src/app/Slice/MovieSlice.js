import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    moviesData: [],
    loading: false,
    error: false
}

const movieSlice = createSlice({
    name: 'moviesData',
    initialState,
    reducers:{
        moviesFetching: (state) => {
            state.loading = true
        },
        moviesFetched: (state, action) => {
            state.loading = false
            state.moviesData = action.payload
        }, 
        moviesError: (state) => {
            state.loading = false
            state.error = true
        }
    }
})
const {actions, reducer} = movieSlice;
export default reducer;
export const {
    moviesFetching,
    moviesFetched,
    moviesError
} = actions;
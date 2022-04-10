import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: [],
}

const movieSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers:{
        getCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
    }
})
const {actions, reducer} = movieSlice;
export default reducer;
export const {
    getCurrentUser
} = actions;
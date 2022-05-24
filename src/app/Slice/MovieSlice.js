import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesData: [],
  seriesData: [],
  searchList: [],
  loading: false,
  error: false,
};

const movieSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {
    moviesFetching: (state) => {
      state.loading = true;
    },
    moviesFetched: (state, action) => {
      state.loading = false;
      state.moviesData = [...state.moviesData, action.payload];
    },
    moviesError: (state) => {
      state.loading = false;
      state.error = true;
    },
    changeSearchList: (state, action) => {
      state.searchList = action.payload;
    },
    seriesFetched: (state, action) => {
      state.loading = false;
      state.seriesData = [...state.seriesData.concat(action.payload)];
    },
    bannerFetched: (state) => {
      state.loading = false;
    },
  },
});
const { actions, reducer } = movieSlice;
export default reducer;
export const {
  moviesFetching,
  moviesFetched,
  moviesError,
  changeSearchList,
  seriesFetched,
  bannerFetched,
} = actions;

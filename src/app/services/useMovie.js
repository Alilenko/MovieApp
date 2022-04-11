import {useHttp} from './useHttp';

const useMovie = () => {
    const {loading, request, error} = useHttp();

    const _apiBase = 'https://api.themoviedb.org/3/';
    const _apiKey = 'fc8e2d1960c121dad3dc28111ab37212';

    const getSearchRequest = async (search) => {
        const res = await request(`${_apiBase}search/movie?api_key=${_apiKey}&query=${search}`);
        return res.results;
    };
    const getMovieById = async (id) => {
        const res = await request(`${_apiBase}movie/${id}?api_key=${_apiKey}`);
        return res;
    };
    const getTranding = async () => {
        const res = await request(`${_apiBase}trending/all/week?api_key=${_apiKey}`);
        return res.results;
    };
    const getNetflixOriginal = async () => {
        const res = await request(`${_apiBase}discover/tv?api_key=${_apiKey}&with_networks=231`);
        return res.results;
    }
    const getTopRated = async () => {
        const res = await request(`${_apiBase}movie/top_rated?api_key=${_apiKey}`);
        return res.results;
    }
    const getActionMovies = async () => {
        const res = await request(`${_apiBase}discover/movie?api_key=${_apiKey}&with_genres=28`);
        return res.results;
    }
    const getComedyMovies = async () => {
        const res = await request(`${_apiBase}discover/movie?api_key=${_apiKey}&with_genres=35`);
        return res.results;
    }
    const getHorrorMovies = async () => {
        const res = await request(`${_apiBase}discover/movie?api_key=${_apiKey}&with_genres=27`);
        return res.results;
    }
    const getRomanceMovies = async () => {
        const res = await request(`${_apiBase}discover/movie?api_key=${_apiKey}&with_genres=10749`);
        return res.results;
    }
    const getDoc = async () => {
        const res = await request(`${_apiBase}discover/movie?api_key=${_apiKey}&with_genres=99`);
        return res.results;
    }

    return {
        getSearchRequest,
        getMovieById,
        getTranding, 
        getNetflixOriginal, 
        getTopRated, 
        getActionMovies, 
        getComedyMovies, 
        getHorrorMovies, 
        getRomanceMovies, 
        getDoc, 
        loading, 
        error}
}

export default useMovie;
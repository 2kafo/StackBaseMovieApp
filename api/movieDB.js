
import axios from 'axios';

import {apikey} from '../constants'

// endpoints
const baseURL = 'https://api.themoviedb.org/3'
const trendingMovieEndpoint = `${baseURL}/trending/movie/day?api_key=${apikey}`
const upcomingMovieEndpoint = `${baseURL}/movie/upcoming?api_key=${apikey}`
const topMovieEndpoint = `${baseURL}/movie/top_rated?api_key=${apikey}`
const searchMovieEndpoint = `${baseURL}/search/movie?api_key=${apikey}`
//Dynamic URLS
const movieDetails = id => `${baseURL}/movie/${id}?api_key=${apikey}`
// Code to fetch image file
export const  image500  = path => path? `https://image.tmdb.org/t/p/w500${path}` : null

export const  image342  = path => path? `https://image.tmdb.org/t/p/w342${path}` : null

export const  image185  = path => path? `https://image.tmdb.org/t/p/w185${path}` : null

export const  fallback  = 'https://www.behance.net/gallery/111593269/Poster-for-Amazon-Prime-Video'

const apicall = async(endpoint, params)=>{
    const options ={
        method: 'GET',
        url: endpoint,
        params: params ? params: {}
    }
    try {
        const response = await axios.request(options);
       
        return response.data
    } catch (error) {
        console.log('error: ', error);
        return {}
    }
}

export const fetchTrendingMovie = () => {
    return apicall(trendingMovieEndpoint)
}
export const fetchUpcoming = () => {
    return apicall(upcomingMovieEndpoint)
}
export const fetchTopRated = () => {
    return apicall(topMovieEndpoint)
}

export const fetchMovieDetails = (id) =>{
    return apicall(movieDetails(id))
}
export const searchMovie = (params) =>{
    return apicall(searchMovieEndpoint, params)
}
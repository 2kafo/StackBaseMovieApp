
import axios from 'axios';

import {apikey} from '../constants'

// endpoints
const baseURL = 'https://api.themoviedb.org/3'
const trendingMovieEndpoint = `${baseURL}/trending/movie/day?api_key=${apikey}`
const upcomingMovieEndpoint = `${baseURL}/movie/upcoming?api_key=${apikey}`
const topMovieEndpoint = `${baseURL}/movie/top_rated?api_key=${apikey}`

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
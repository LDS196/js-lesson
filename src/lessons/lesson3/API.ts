import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',

};
const key = '217e4f2a';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
         return axiosInstance.get(`/?apikey=${key}&t=${title}`).then(res=>res.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`/?apikey=${key}&s=${title}&type=${type}`).then(res=>res.data)
    }
};


export default API;

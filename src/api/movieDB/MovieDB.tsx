import axios from "axios";
const movieDB = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie`,
    params:{
        api_key: 'c4b768c3f1af19bd3579d1f4c4903296',
        language: 'en-US'
    }
});

export default movieDB
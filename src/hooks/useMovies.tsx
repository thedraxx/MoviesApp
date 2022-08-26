import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB/MovieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/MovieInterface';


const useMovies = () => {
    const [IsLoading, setIsLoading] = useState(true);
    const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([])

    const getMovies = async() => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        const movies = resp.data.results;
        setMoviesInCinema(movies)
        setIsLoading(false)
    }

    useEffect(() => {
        //Now_playing
        getMovies();
      }, [])
    
    return{
        moviesInCinema,
        IsLoading
    }
}

export default useMovies
import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB/MovieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/MovieInterface';


const useMovies = () => {
    const [IsLoading, setIsLoading] = useState(true);
    const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([])
    const [moviesPopulars, setMoviesPopulars] = useState<Movie[]>([])

    const getMovies = async() => {
        const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
        setMoviesInCinema(respNowPlaying.data.results)
        setMoviesPopulars(respPopular.data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies();
      }, [])
    
    return{
        moviesInCinema,
        IsLoading,
        moviesPopulars
    }
}

export default useMovies
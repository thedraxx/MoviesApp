import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB/MovieDB';
import { Movie, MovieDBMoviesResponse, Dates } from '../interfaces/MovieInterface';

interface MoviesState {
    now_playing: Movie[];
    popular: Movie[];
    top_rated: Movie[];
    unpcoming: Movie[];
}

const useMovies = () => {
    const [IsLoading, setIsLoading] = useState(true);
    const [MoviesState, setMoviesState] = useState<MoviesState>({
        now_playing: [],
        popular: [],
        top_rated: [],
        unpcoming: [],
    })

    const getMovies = async () => {
        const now_playingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const PopularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
        const TopRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const UnpComingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const response = await Promise.all([
            now_playingPromise,
            PopularPromise,
            TopRatedPromise,
            UnpComingPromise]);

        setMoviesState({
            now_playing: response[0].data.results,
            popular: response[1].data.results,
            top_rated: response[2].data.results,
            unpcoming: response[3].data.results,
        })
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...MoviesState,
        IsLoading,
    }
}

export default useMovies
import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB/MovieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/MovieInterface';

interface MovieDetails {
    cast: Cast[],
    isLoading: boolean,
    movieFull?: MovieFull,
}

const useMovieDetails = (movieId: number) => {

    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });


    const getMovieDetails = async () => {
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResponse, castPromiseResponse] = await Promise.all([movieDetailsPromise, castPromise]);

        setstate({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castPromiseResponse.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...state
    }
}

export default useMovieDetails
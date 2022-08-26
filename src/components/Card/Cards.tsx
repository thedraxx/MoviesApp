import React from 'react'
import { Image, Text, View } from 'react-native'
import { Movie } from '../../interfaces/MovieInterface'
import { CardCustom, ContainerImage } from './style'

interface Props{
    movie: Movie
}

const Cards = ({movie}:Props) => {
    console.log(movie.poster_path)
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <ContainerImage>
        <CardCustom 
            source={{uri: uri}}
        />
    </ContainerImage>
  )
}

export default Cards
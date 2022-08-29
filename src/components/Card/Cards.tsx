import React from 'react'
import { Image, Text, View } from 'react-native'
import { Movie } from '../../interfaces/MovieInterface'
import { CardCustom, ContainerImage } from './style'

interface Props{
    movie: Movie
    height?:number;
    width?:number;
}

const Cards = ({movie,height = 420, width = 300}:Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <ContainerImage height={height} width={width} >
        <CardCustom 
            source={{uri: uri}}
        />
    </ContainerImage>
  )
}

export default Cards
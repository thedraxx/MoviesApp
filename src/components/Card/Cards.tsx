import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Movie } from '../../interfaces/MovieInterface'
import { CardCustom, ContainerImage } from './style'

interface Props {
  movie: Movie
  height?: number;
  width?: number;
}

const Cards = ({ movie, height = 420, width = 300 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail',movie)}
      activeOpacity={0.8}
    >
      <ContainerImage height={`${height}px`} width={`${width}px`} >
        <CardCustom
          source={{ uri: uri }}
        />
      </ContainerImage>
    </TouchableOpacity>
  )
}

export default Cards
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { RootStackParams } from '../../navigation/Navigation';
import { ContainerImage, ContainerInfo, ImagePoster, Title, SubTitle } from './style';
import { ScrollView, Dimensions, ActivityIndicator, Text } from 'react-native';
import useMovieDetails from '../../hooks/useMovieDetails';
import MovieDetail from '../../components/MovieDetails/MovieDetail';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }

const Detail = ({ route }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`


  const { isLoading, cast, movieFull } = useMovieDetails(movie.id)


  return (
    <ScrollView>
      <ContainerImage screenHeight={screenHeight}>
        <ImagePoster
          source={{ uri }}
        />
      </ContainerImage>

      <ContainerInfo>
        <Title style={{ color: 'black' }}>{movie.original_title}</Title>
        <SubTitle style={{ color: 'black' }}>{movie.title}</SubTitle>
      </ContainerInfo>
      
      <ContainerInfo>
        {
          isLoading ? <ActivityIndicator size={30} color="gray" style={{ marginTop: 20 }} /> : 
          <MovieDetail movieFull={movieFull!} cast={cast}/>
        }
      </ContainerInfo>

    </ScrollView>
  );
};

export default Detail;

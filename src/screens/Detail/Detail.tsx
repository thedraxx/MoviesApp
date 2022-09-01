import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { RootStackParams } from '../../navigation/Navigation';
import { ContainerImage, ContainerInfo, ImagePoster, Title, SubTitle, BackButton } from './style';
import { ScrollView, Dimensions, ActivityIndicator, Text } from 'react-native';
import useMovieDetails from '../../hooks/useMovieDetails';
import MovieDetail from '../../components/MovieDetails/MovieDetail';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }

const Detail = ({ route,navigation }: Props) => {

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
            <MovieDetail movieFull={movieFull!} cast={cast} />
        }
      </ContainerInfo>

      {/* Boton para regresar */}
      <BackButton onPress={() => navigation.goBack()}>
        <Icon 
          color={'white'}
          name="arrow-back-outline"
          size={60}/>
      </BackButton>
    </ScrollView>
  );
};

export default Detail;

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { RootStackParams } from '../../navigation/Navigation';
import { ContainerImage, ContainerInfo, ImagePoster, Title, SubTitle } from './style';
import { ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import useMovieDetails from '../../hooks/useMovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }

const Detail = ({ route }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  

  useMovieDetails(movie.id)

  return (
    <ScrollView>
      <ContainerImage screenHeight = {screenHeight}>
        <ImagePoster
          source={{ uri }}
        />
      </ContainerImage>

      <ContainerInfo>
        <Title style={{color:'black'}}>{movie.original_title}</Title>
        <SubTitle style={{color:'black'}}>{movie.title}</SubTitle>
      </ContainerInfo>

      <ContainerInfo>
        <Icon name="star" color="gray" size={20} ></Icon>
      </ContainerInfo>
      
    </ScrollView>
  );
};

export default Detail;

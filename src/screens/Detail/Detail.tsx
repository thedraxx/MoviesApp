import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { RootStackParams } from '../../navigation/Navigation';
import { ContainerImage, ContainerInfo, ImagePoster, Title, SubTitle } from './style';
import { ScrollView, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }
const Detail = ({ route }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <ScrollView>
      <ContainerImage screenHeight = {screenHeight}>
        <ImagePoster
          source={{ uri }}
        />
      </ContainerImage>

      <ContainerInfo>
        <Title>{movie.original_title}</Title>
        <SubTitle>{movie.title}</SubTitle>
      </ContainerInfo>
    </ScrollView>
  );
};

export default Detail;

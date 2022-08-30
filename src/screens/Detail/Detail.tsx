import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import { Movie } from '../../interfaces/MovieInterface';
import { RootStackParams } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams,'Detail'>{}

const Detail = ({route}:Props) => {
  const movie = route.params as Movie;

  console.log(movie)

  return (
    <View>
      <Text>DetailScren</Text>
    </View>
  );
};

export default Detail;

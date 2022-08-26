import React from 'react';
import { ActivityIndicator, Text, View} from 'react-native';
import useMovies from '../../hooks/useMovies';
import { HomeView } from './style';

const Home = () => {

const {moviesInCinema,IsLoading} = useMovies()

  if (IsLoading) {
    return (
      <HomeView>
        <ActivityIndicator color='red' size={100} />
      </HomeView>
    )
  }

  return (
    <View>
      <Text>HomeScren</Text>
    </View>
  );
};

export default Home;

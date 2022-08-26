import React from 'react';
import { ActivityIndicator, Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Cards from '../../components/Card/Cards';
import useMovies from '../../hooks/useMovies';
import { HomeView, Loading } from './style';

const Home = () => {
const {moviesInCinema,IsLoading} = useMovies()
const {top} = useSafeAreaInsets()

  if (IsLoading) {
    return (
      <Loading>
        <ActivityIndicator color='red' size={100} />
      </Loading>
    )
  }


  return (
    <HomeView top={top} inputColor="rebeccapurple">
      <Cards 
          movie={moviesInCinema[0]}
      />
    </HomeView>
  );
};

export default Home;

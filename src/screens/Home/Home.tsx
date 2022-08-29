import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Cards from '../../components/Card/Cards';
import useMovies from '../../hooks/useMovies';
import { HomeView, Loading } from './style';
import HorizontalSlider from '../../components/HorizonalSlider/HorizontalSlider';

const { width } = Dimensions.get('window')

const Home = () => {
  const { moviesInCinema, IsLoading } = useMovies()
  const { top } = useSafeAreaInsets()

  if (IsLoading) {
    return (
      <Loading>
        <ActivityIndicator color='red' size={100} />
      </Loading>
    )
  }

  return (
    <ScrollView>
      {/* // Carrousel */}
      <HomeView top={top} inputColor="rebeccapurple">
        <Carousel
          data={moviesInCinema}
          renderItem={({ item }: any) => <Cards movie={item} />}
          sliderWidth={width}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
        />

        {/* Most Populars */}
        <HorizontalSlider title='in cinema' movies={moviesInCinema} />

      </HomeView>
    </ScrollView>
  );
};

export default Home;

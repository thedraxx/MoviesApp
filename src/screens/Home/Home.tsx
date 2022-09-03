import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Cards from '../../components/Card/Cards';
import useMovies from '../../hooks/useMovies';
import { HomeView, Loading } from './style';
import HorizontalSlider from '../../components/HorizonalSlider/HorizontalSlider';
import GradientBackground from '../../components/GradientBackground/GradientBackground';

const { width } = Dimensions.get('window')

const Home = () => {
  const { now_playing, popular, top_rated,unpcoming, IsLoading } = useMovies()
  const { top } = useSafeAreaInsets()

  if (IsLoading) {
    return (
      <Loading>
        <ActivityIndicator color='red' size={100} />
      </Loading>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        {/* // Carrousel */}
        <HomeView top={top} inputColor="rebeccapurple">
          <Carousel
            data={popular}
            renderItem={({ item }: any) => <Cards movie={item} />}
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />

          {/* Most Populars */}
          <HorizontalSlider title='In cinema' movies={now_playing} />
          <HorizontalSlider title='Most Valorates' movies={top_rated} />
          <HorizontalSlider title='Upcoming' movies={unpcoming} />

        </HomeView>
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;

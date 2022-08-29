import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, Text, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Cards from '../../components/Card/Cards';
import useMovies from '../../hooks/useMovies';
import { HomeView, Loading } from './style';

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
        />

        {/* Most Populars */}

        <View style={{ height: 260, marginTop: 25 }}>

          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Most Populars</Text>
          <FlatList
            data={moviesInCinema}
            renderItem={({ item }: any) => (
              <Cards movie={item} width={140} height={200} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

        </View>
      </HomeView>

    </ScrollView>

  );
};

export default Home;

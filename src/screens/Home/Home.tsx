import React, { useEffect } from 'react';
import { Text, View} from 'react-native';
import movieDB from '../../api/movieDB/MovieDB';
import { MovieDBNowPlaying } from '../../interfaces/MovieInterface';

const Home = () => {

  useEffect(() => {
    
    movieDB.get<MovieDBNowPlaying>('/now_playing')
      .then(resp => {
        console.log(resp.data.results[0].title)
      })

  }, [])

  return (
    <View>
      <Text>HomeScren</Text>
    </View>
  );
};

export default Home;

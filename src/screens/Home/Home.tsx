import React, { useEffect } from 'react';
import { Text, View} from 'react-native';
import movieDB from '../../api/movieDB/MovieDB';

const Home = () => {

  useEffect(() => {
    
    movieDB.get('/now_playing')
      .then(resp => {
        console.log(resp.data)
      })

  }, [])

  return (
    <View>
      <Text>HomeScren</Text>
    </View>
  );
};

export default Home;

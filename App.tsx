import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import Fade from './src/screens/Fade/Fade';
const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <Fade /> */}
    </NavigationContainer>
  );
};

export default App;

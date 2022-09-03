import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import Fade from './src/screens/Fade/Fade';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <Fade /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;

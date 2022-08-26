import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail/Detail';
import Home from '../screens/Home/Home';
import { Colors } from '../utilities/colors/colors';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }, headerShown: false, cardStyle: { backgroundColor: Colors.white } }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
export default Navigation;

import React, { useRef } from 'react'
import { View, Text, Animated, Button } from 'react-native';
import { Container } from './Style';

const Fade = () => {

  const opacity = useRef(new Animated.Value(0.5)).current

  const FadeIn = () => {
    console.log("hola")
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }
    ).start();

  }

  return (
    <Container>
      <Animated.View
        style={{
          backgroundColor: 'white',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 50,
        }}
      />

      <Button
        title='Fade-In'
        onPress={FadeIn}
      />



    </Container>
  )
}

export default Fade;

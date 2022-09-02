import React from 'react'
import { Animated, Button } from 'react-native';
import useFade from '../../hooks/useFade';
import { Container } from './Style';

const Fade = () => {

  const { FadeIn, FadeOut,opacity} = useFade()

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


      <Button
        title='Fade-In'
        onPress={FadeOut}
      />

    </Container>
  )
}

export default Fade;

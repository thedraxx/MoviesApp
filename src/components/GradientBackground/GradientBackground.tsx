import React, { useContext,useEffect } from 'react'
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../../context/GradientContext';
import useFade from '../../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {

  const { colors, prevColors,setPrevMainColors } = useContext(GradientContext)

  const {opacity,FadeIn, FadeOut} = useFade()

  useEffect(() => {
    FadeIn(()=> {
      setPrevMainColors(colors);
      FadeOut();
    })
    

  }, [colors])

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      <Animated.View
        style={{ ...StyleSheet.absoluteFillObject, opacity }}
      >
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.7 }}
        />

      </Animated.View>
      {children}
    </View>
  )
}

export default GradientBackground
import { useRef } from 'react'
import { Animated } from 'react-native';

const useFade = () => {

    const opacity = useRef(new Animated.Value(0.5)).current

    const FadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }
        ).start();
    }

    const FadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }
        ).start();
    }

    return {
        FadeIn,
        FadeOut,
        opacity
    }
}

export default useFade
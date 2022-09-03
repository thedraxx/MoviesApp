import React from 'react'
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[]
}


const GradientBackground = ({children}:Props) => {
  return (
    <View style={{flex:1}}>
            <LinearGradient 
                colors={['blue', 'red','white']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1, y:0.1}}
                end={{x:0.5,y:0.7}}
            />
            {children}
    </View>
  )
}

export default GradientBackground
import React, { useRef,useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, ImageBackground,Easing} from "react-native";
import * as Progress from 'react-native-progress';
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'
import LottieView from 'lottie-react-native';
// animated waiting screen. This will show until a volunteer joins.

const WaitingPage = () => {
  // x position will be changed
  const x = useRef(new Animated.Value(-220)).current

useEffect(() => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(x, {
        toValue: 300,
        duration: 8000,
        easing:Easing.linear,
        useNativeDriver: true
      }),
      Animated.timing(x, {
        toValue: -250,
        duration: 0,
        useNativeDriver: true
      }),
      
    ]),
    {
      //hopefully they wont have to wait for this long 
      iterations: 100000000000
    }
  ).start()

  })
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/waitingBackground.png')} style={styles.imageContainer}>
        <Text style={styles.text}>
        Thank you for your patience. You’ll be paired with your volunteer shortly.
        </Text>
        <Animated.View style={{ transform: [{translateX: x}] }}>
        <LottieView source={require('../assets/walkdog.json')} autoPlay loop style={{width:130}} />
        </Animated.View>
          <Progress.Bar progress={0} height={5} width={dimensions.fullWidth*.9} indeterminate={true} indeterminateAnimationDuration={8000} animationType='timing' 
          borderColor={colors.secondary} color={colors.primary} unfilledColor={colors.secondary}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:colors.background
  },
  imageContainer:{
     flex: 1, flexDirection: 'column',  alignItems: 'center',width:dimensions.fullWidth,height:dimensions.fullHeight*.95
  },
  fadingContainer: {
    marginTop:dimensions.fullHeight*.25,
    paddingVertical: padding.sm,
    paddingHorizontal: padding.md,
  },
  walk:{
    flexDirection:'row',
    width:dimensions.fullWidth*.9,
    justifyContent:'space-between', 
    marginBottom:margin.sm
  },
  text:{
    fontSize: fonts.lg,
    fontFamily: fonts.main,
    lineHeight: fonts.lgLineHeight,
    textAlign: 'center',
    color: colors.tertiary,
    paddingHorizontal:padding.md,
    marginTop:dimensions.fullHeight*.22
  }
});

export default WaitingPage;
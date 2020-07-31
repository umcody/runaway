import React, { useRef,useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, ImageBackground,Dimensions} from "react-native";
import * as Progress from 'react-native-progress';
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'
// animated waiting screen. This will show until a volunteer joins.
// need to implement waiting time
const WaitingPage = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  
  // animation for woman fading in n out
  useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim1, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim1, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim2, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim2, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim3, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim3, {
            toValue: 0,
            duration: 900,
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
        <View style={styles.walk}>
          <Animated.Image
          source={require('../assets/standing23.png')}
            style={[
              styles.fadingContainer,
              {
                opacity: fadeAnim1 // Bind opacity to animated value
              }
            ]}
          >
          </Animated.Image>
          <Animated.Image
          source={require('../assets/standing23.png')}
            style={[
              styles.fadingContainer,
              {
                opacity: fadeAnim2 // Bind opacity to animated value
              }
            ]}
          >
          </Animated.Image>
          <Animated.Image
          source={require('../assets/standing23.png')}
            style={[
              styles.fadingContainer,
              {
                opacity: fadeAnim3 // Bind opacity to animated value
              }
            ]}
          >
          </Animated.Image>
          
        </View>
          <Progress.Bar progress={0} height={5} width={dimensions.fullWidth*.9} indeterminate={true} indeterminateAnimationDuration={6000} animationType='timing' 
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
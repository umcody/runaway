import React, { useRef,useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, ImageBackground,Dimensions} from "react-native";
import * as Progress from 'react-native-progress';

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
            duration: 1500,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim1, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim2, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim2, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim3, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim3, {
            toValue: 0,
            duration: 1400,
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
          <Progress.Bar progress={0} height={5} width={300} indeterminate={true} indeterminateAnimationDuration={9000} animationType='timing' 
          borderColor='#E3F1FC' color="#ACDAFF" unfilledColor='#E3F1FC'/>
      </ImageBackground>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer:{
     flex: 1, flexDirection: 'column',  alignItems: 'center',width:"100%"
  },
  fadingContainer: {
    marginTop:windowHeight*.2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  walk:{
    flexDirection:'row',
    width:300,
    justifyContent:'space-between', 
    marginBottom:10
  },
  text:{
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    color: "#2E5F85",
    paddingHorizontal:12,
    marginTop:windowHeight*.2
  }
});

export default WaitingPage;
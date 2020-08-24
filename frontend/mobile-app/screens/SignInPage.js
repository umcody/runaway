import React, { useState, useCallback, useEffect } from "react";
import socketioclient from "socket.io-client";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import { colors, dimensions, padding, margin,borderRadius, fonts } from "../style/styleValues";
//import axios from "axios";

export default function SignInPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/flowerImage.png")}
        style={styles.background}
      >
        <Image
          style={styles.runawayLogo}
          source={require("../images/RunawayLogo.png")}
          resizeMode="contain"
        />
        <Text style={styles.Welcome}>RUNAWAY.APP</Text>
        <Text style={styles.sign}>Sign In</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.userName}
            clearButtonMode="always"
            placeholder="Username/Email"
          ></TextInput>
          <TextInput
            style={styles.password}
            clearButtonMode="always"
            placeholder="Password"
          ></TextInput>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.enter}>Enter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgot}>Forgot Username/Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgot}>New to Runaway? Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.newtoRunawayContainer}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.newtoRunaway}>Continue as a Guest</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const WelcomeHeight = dimensions.fullHeight/5;

const styles = StyleSheet.create({
  container: {justifyContent:'center',flex:1,alignItems:'center'},
  runawayLogo: {
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    top: 30,
    width: 120,
    height: 120,
  },
  Welcome: {
    top: WelcomeHeight,
    color: colors.foreground,
    fontSize: 26,
    fontFamily:fonts.main,
    alignItems: "center",
    textAlign: "center",
    padding: padding.sm,
  },
  sign: {
    top: WelcomeHeight,
    color: colors.foreground,
    fontSize: fonts.lg,
    fontFamily:fonts.subheader,
    alignItems: "center",
    textAlign: "center",
    padding: padding.sm
  },
  inputs:{
    marginTop: WelcomeHeight + 25,
    backgroundColor:colors.background,
    width:dimensions.fullWidth-padding.md*4,
    padding:padding.lg,
    marginHorizontal:margin.md*2,
    borderRadius:borderRadius.sm
  },
  userName: {
    alignSelf: "center",
    width: dimensions.fullWidth*.6,
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.background,
    paddingHorizontal: padding.sm,
    borderColor: '#C4C4C4',
    marginVertical:padding.sm,
    fontFamily:fonts.subheader,
    fontSize:fonts.md
  },
  password: {
    alignSelf: "center",
    width: dimensions.fullWidth*.6,
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.background,
    paddingHorizontal: padding.sm,
    borderColor: '#C4C4C4',
    marginVertical:padding.sm,
    fontFamily:fonts.subheader,
    fontSize:fonts.md
  },
  forgotContainer: {
    width: dimensions.fullWidth*.6,
    height: 25,
    alignSelf: "center",
    justifyContent: "center",
  },
  forgot: {
    color: colors.foreground,
    fontStyle: "normal",
    fontFamily:fonts.subheader,
    fontSize: 14,
    alignItems: "center",
    textAlign: "center",
  },
  signInButton: {
    borderRadius: 5,
    backgroundColor: colors.primary,
    height: 40,
    width: dimensions.fullWidth*.6,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical:margin.md
  },
  enter: {
    color: colors.background,
    justifyContent: "center",
    alignSelf: "center",
    fontFamily:fonts.subheader,
    fontSize:fonts.md
  },
  newtoRunawayContainer: {
    width: dimensions.fullWidth*.6,
    height: 25,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical:margin.sm
  },
  newtoRunaway: {
    color: colors.foreground,
    fontStyle: "normal",
    fontSize: fonts.md,
    alignItems: "center",
    textAlign: "center",
    fontFamily:fonts.subheader,
  },
  background: {
    width: "100%",
    height: "100%",
  },
});

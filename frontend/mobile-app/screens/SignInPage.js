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
import axios from "axios";

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
        />
        <Text style={styles.Welcome}>Welcome</Text>
        <TextInput
          style={styles.userName}
          clearButtonMode="always"
          placeholder="Username or Email"
        ></TextInput>
        <TextInput
          style={styles.password}
          clearButtonMode="always"
          placeholder="Password"
        ></TextInput>
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgot}>Forgot Username/Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newtoRunawayContainer}>
          <Text style={styles.newtoRunaway}>Continue as a Guest</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const WelcomeHeight = 300;

const styles = StyleSheet.create({
  container: {},
  runawayLogo: {
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    top: 100,
    width: 175,
    height: 181,
  },
  Welcome: {
    top: WelcomeHeight,
    color: "#2E5F85",
    fontStyle: "normal",
    fontSize: 24,
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  userName: {
    top: WelcomeHeight + 25,
    alignSelf: "center",
    width: "60%",
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 5,
    borderColor: "#2E5F85",
  },
  password: {
    top: WelcomeHeight + 50,
    alignSelf: "center",
    width: "60%",
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 5,
    borderColor: "#2E5F85",
  },
  forgotContainer: {
    top: WelcomeHeight + 75,
    width: "60%",
    height: 25,
    alignSelf: "center",
    justifyContent: "center",
  },
  forgot: {
    color: "#2E5F85",
    fontStyle: "normal",
    fontSize: 14,
    alignItems: "center",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  signInButton: {
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: "#FF9EDA",
    borderColor: "#FF9EDA",
    height: 35,
    width: 100,
    alignSelf: "center",
    top: WelcomeHeight + 100,
  },
  signIn: {
    color: "#FFFFFF",
    fontSize: 24,
    justifyContent: "center",
    alignSelf: "center",
  },
  newtoRunawayContainer: {
    top: WelcomeHeight + 125,
    width: "62%",
    height: 25,
    alignSelf: "center",
    justifyContent: "center",
  },
  newtoRunaway: {
    color: "#2E5F85",
    fontStyle: "normal",
    fontSize: 14,
    alignItems: "center",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  background: {
    width: "100%",
    height: "100%",
  },
});

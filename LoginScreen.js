import { View, Text, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import * as Google from "expo-auth-session/providers/google";
import WebBrowser from "expo-web-browser";
import * as firebase from "firebase/compat";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/compat/auth";
import { auth } from "firebase/compat";

const config = {
  androidClientId:
    "",
  iosClientId:
    "",
  expoClientId:
    "",
  responseType: "id_token",
};
const LoginScreen = () => {
  const [request, response, promptAsync] = Google.useAuthRequest(config);

  async function signInWithGoogle() {
    promptAsync();
  }

  useEffect(() => {
    if (response?.type === 'success') {
    const credential = GoogleAuthProvider.credential(id_token);
    signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View>
      <Button title="login" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;



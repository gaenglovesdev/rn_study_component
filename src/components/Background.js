import React, {useState} from  "react";
import {View, Text, StyleSheet, ImageBackground,StatusBar,TouchableOpacity} from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Background(){
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground source={{uri :"https://wallpaperaccess.com/full/495002.jpg"}} style={styles.container(insets)}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.logoWrap}>
        <Text style={styles.logo}>HELLO</Text>
      </View>
      <View style={styles.buttonWrap(insets)}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>로그인 하러가기</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>  
  )
}


const styles = StyleSheet.create({
  container : (inset) => ({
    flex : 1,
    paddingTop : inset.top + 200
  }),
  logoWrap : {
    alignItems:"center",
    justifyContent : "center"
  },
  logo : {
    color :"#fff",
    fontSize : 30
  },
  buttonWrap : (inset) => ({
    padding: 20,
    paddingBottom : inset.bottom + 20,
    marginTop : "auto"
  }),
  button : {
    backgroundColor : "#fff",
    borderRadius : 4,
    padding:20,
    alignItems:"center"
  },
  buttonLabel : {
    color : "#000",
    fontSize : 18
  }

})
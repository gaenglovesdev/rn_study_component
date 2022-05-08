import React from "react";
import {StyleSheet,View,Text} from "react-native";

export default function HelloWorld(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HelloWorld</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent:"center",
    alignItems : "center"
  },
  text : {
    fontSize : 30
  }
})
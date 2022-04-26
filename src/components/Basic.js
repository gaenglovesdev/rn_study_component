import React from  "react";
import {View,StyleSheet,Text} from "react-native"

export default function Basic(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>안녕하세요.</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems: "center"
  },
  text : {
    color: "#000",
    fontSize : 30
  }
})
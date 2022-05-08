import { useNavigation } from "@react-navigation/native";
import React from "react";
import {StyleSheet,View,Text,Pressable} from "react-native";

export default function Detail({navigation}){

  //const navigation = useNavigation()
  // navigation.navigate("Home")
  // navigation.goBack()
  // navigation.push("Detail")
  //navigation.popToTop()
  //navigation.replace("Detail")
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.link}>GO BACK</Text>
      </Pressable>
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
    fontSize : 30,
    marginBottom : 20
  },
  link : {
    color  : "#531ef4",
    marginBottom : 10
  }
})
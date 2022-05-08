import React from "react";
import {StyleSheet,View,Text,Pressable} from "react-native";

export default function Home({navigation}){
  
  // React.useEffect(() => {
  //   navigation.navigate("HelloWorld")
  // },[])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
      <Pressable onPress={() => navigation.navigate("HelloWorld")}>
        <Text style={styles.link}>GO HelloWorld</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Detail")}>
        <Text style={styles.link}>GO Detail</Text>
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
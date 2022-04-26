import React from  "react";
import {View,StyleSheet,Text, TextInput,} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Storage(){
  const STORAGE_KEY = "@data";
  const [data, setData] = React.useState("");

  const handleChange = (txt) => {
    setData(txt);
    AsyncStorage.setItem(STORAGE_KEY, txt);
  }

  
  //TIP!!! 
  //npm i react-native-encrypted-storage
  React.useEffect(() => {
    (async () => {
      const storageData = await AsyncStorage.getItem(STORAGE_KEY);
      setData(storageData);
    })()
  },[])

  return (
    <View style={styles.container}>
      <TextInput value={data} onChangeText={handleChange} style={styles.input}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems: "center",
    paddingHorizontal : 16
  },
  input: {
    borderWidth : 1,
    borderRadius : 4,
    padding : 20,
    width : "100%"
  }
})
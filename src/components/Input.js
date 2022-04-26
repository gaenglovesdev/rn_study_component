import React, {useState} from  "react";
import {View, StyleSheet, Text, TextInput, Image, ScrollView, KeyboardAvoidingView, Platform} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Input(){
  const [data , setData] = useState({
    name : "",
    phone : ""
  })
  return (
    <SafeAreaView style={{flex : 1}}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{flex : 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>RN 개발자 구인</Text>
      </View>
        <ScrollView  style={styles.container}>
          <Image source={require("../assets/rn_developer.png")} style={styles.banner}/>
          <View>
            <TextInput
              style={styles.input}
              value={data.name}
              placeholder={"이름을 입력하세요."}
              onFocus={() => console.log("FOCUS")}
              onBlur={() => console.log("BLUR")}
              onChangeText={name => setData({
                ...data,
                name 
              })}
            />
            <TextInput
              style={styles.input}
              value={data.phone}
              placeholder={"연락처를 입력하세요."}
              keyboardType="number-pad"
              onChangeText={phone => setData({
                ...data,
                phone 
              })}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingHorizontal : 16,
    paddingTop : 10
  },
  header : {
    alignItems : "center",
    borderBottomWidth : 1,
    borderColor : "#f1f3f5",
    paddingVertical : 20
  },
  title : {
    fontSize : 20
  },
  banner : {
    width : "100%",
    height : 500,
    marginBottom : 20
  },
  input : {
    color : "#000",
    padding: 10,
    borderWidth : 1,
    borderColor : "#f1f3f5",
    marginBottom : 10
  },
  
})
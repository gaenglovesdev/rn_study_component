import React from  "react";
import {View,StyleSheet,Image,ScrollView,SafeAreaView,RefreshControl} from "react-native"

export default function Scroll(){
  return (
    <SafeAreaView style={{flex : 1, width : "100%"}}>
        <ScrollView>
          <View style={{flex :1}}>
            <Image style={styles.image} source={{uri :"https://images.mypetlife.co.kr/content/uploads/2018/07/09160052/fuca-2491995_1280.jpg"}}/>
            <Image style={styles.image} source={{uri :"https://images.mypetlife.co.kr/content/uploads/2018/07/09160052/fuca-2491995_1280.jpg"}}/>
            <Image style={styles.image} source={{uri :"https://images.mypetlife.co.kr/content/uploads/2018/07/09160052/fuca-2491995_1280.jpg"}}/>
            <Image style={styles.image} source={{uri :"https://images.mypetlife.co.kr/content/uploads/2018/07/09160052/fuca-2491995_1280.jpg"}}/>
            <Image style={styles.image} source={{uri :"https://images.mypetlife.co.kr/content/uploads/2018/07/09160052/fuca-2491995_1280.jpg"}}/>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems: "center"
  },
  image : {
    width : "100%",
    height :300
  }
})
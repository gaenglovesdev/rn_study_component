import React,{useState, useEffect } from "react";
import {StyleSheet,View,Text,Pressable, Linking, Modal, FlatList, Image, Dimensions, Alert} from "react-native";
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import CameraRoll from "@react-native-community/cameraroll";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Post({navigation}){
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [endCursor, setEndCursor] = useState("");
  const {top} = useSafeAreaInsets();
  const {width} = Dimensions.get("window")
  
  const getPhoto = async (loadMore) => {
    setGalleryVisible(true);
    try {
      const params = {};

      if(loadMore){
        params.after = endCursor
      }
      const photoResult = await CameraRoll.getPhotos({
        first: 3,
       ...params
      });

      console.log(photoResult.edges[0])
      
      setEndCursor(photoResult.page_info.end_cursor)
      setPhotos([...photos, ...photoResult.edges])

    } catch (error) {
      checkPermissions()
    }
  }
  const checkPermissions = async () => {
    try{
      const result = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      
      if(result === RESULTS.DENIED){
        await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
      }else if(result === RESULTS.BLOCKED){
        Alert.alert("갤러리 권한을 허용해주세요.", "", [
          {text : "열기", onPress : Linking.openSettings}
        ])
      }else{
        console.log("RESULT#########", result)
      }
    }catch{
      console.log("PERMISSION ERROR");
    }
  }

  useEffect(() => {
    //checkPermissions()
  },[])

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Post</Text>
      <Pressable onPress={() => Linking.openSettings()}>
        <Text style={styles.link}>SETTING</Text>
      </Pressable>
      <Pressable onPress={() => getPhoto()}>
        <Text style={styles.link}>OPEN GALLERY</Text>
      </Pressable>
    </View>
    <Modal visible={galleryVisible}>
      <View style={{flex : 1 , paddingTop : top }}>
        <Pressable onPress={() => setGalleryVisible(false)}>
          <Text>CLOSE</Text>
        </Pressable>
        <Pressable
          onPress={() => getPhoto(true)}
          style={{
            height : 56,
            borderRadius : 4,
            justifyContent:"center",
            alignItems : "center",
            marginBottom : 10,
            backgroundColor : "#f1f3f5"
          }}
        >
          <Text>GET MORE</Text>
        </Pressable>
        <FlatList
          data={photos}
          numColumns={3}
          //onEndReached={() => getPhoto(true)}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-between",
            marginBottom : 4
          }}
          renderItem={({item}) =>
            <View>
              <Image
                source={{uri : item.node.image.uri}}
                style={{width :width*0.33, height :100}}
              />
            </View>
          }
          keyExtractor={(item,index) => index.toString()}
        />
      </View>
    </Modal>
    </>
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
  },
  button : {
    height : 56,
    borderRadius : 8,
    backgroundColor : "#f4f4f4"
  }
})
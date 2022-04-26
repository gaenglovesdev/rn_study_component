import React,{useState,useEffect} from  "react";
import {View,StyleSheet,Text,Animated,TouchableOpacity, Modal,SafeAreaView} from "react-native"

export default function Animate(){
  const [modalVisible,setModalVisible] = useState(false);
  const [visibleAnimationValue] = useState(new Animated.Value(0));
  const [visibleAnimationStyle] = useState({
    transform: [
      {
        scale: visibleAnimationValue
      }
    ]
  });

  useEffect(() => {
    if (modalVisible) {
      Animated.spring(visibleAnimationValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(visibleAnimationValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false
      }).start();
    }
  }, [modalVisible]);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>SHOW ALERT</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.alert, visibleAnimationStyle]}>
            <View style={styles.messageWrap}>
              <Text style={styles.message}>Hello World!</Text>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    padding : 100
  },
  modalContainer : {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  alert: {
    borderRadius: 12,
    backgroundColor: "#ffffff",
    width: 300,
    overflow: "hidden"
  },
  buttonWrap: {
    borderTopWidth: 1,
    borderColor: "#eeeeee",
    flexDirection: "row"
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    borderColor: "#eeeeee"
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#171717"
  },
  messageWrap: {
    alignItems: "center",
  },
  message: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 25,
    color: "#171717",
    paddingVertical: 25,
    textAlign: "center"
  }
})
import React, {useState} from  "react";
import {View, StyleSheet, Modal, TouchableOpacity, Text,SafeAreaView} from "react-native"

export default function ModalExample(){
  const [modalVisible , setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.label}>SHOW MODAL</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <Text>TEST</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>HIDE</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems: "center"
  },
  button : {
    padding: 10,
    borderRadius : 5,
    backgroundColor : "orange",
    flexGrow : 0,
    flexShrink : 0
  },
  label : {
    color :"#fff"
  }
})

import React, {useState} from  "react";
import {View, StyleSheet, Text, TouchableOpacity, PanResponder, Animated, Dimensions, TouchableWithoutFeedback} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function PanResponderExample(){

  const [visibleAnimationValue] = useState(new Animated.Value(0));
  const [visibleAnimationStyle] = useState({
    transform: [
      {
        translateY: visibleAnimationValue
      }
    ]
  });
  const windowHeight = Dimensions.get("window").height;
  const insets = useSafeAreaInsets();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const {moveY, y0} = gesture;
      const distance = moveY - y0;
      
      if (distance >= 0) {
        Animated.timing(visibleAnimationValue, {
          toValue: moveY - y0,
          duration: 0,
          useNativeDriver: false
        }).start();
      } else {
        if (distance <= windowHeight) {
          Animated.timing(visibleAnimationValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false
          }).start();
        } else {
          Animated.timing(visibleAnimationValue, {
            toValue: moveY - y0,
            duration: 0,
            useNativeDriver: false
          }).start();
        }
      }
    },
    onPanResponderRelease: (event, gesture) => {
      const {moveY, y0} = gesture;
      const distance = moveY - y0;
      const ON_OFF_RANGE = 330;
      if (distance >= 0) {
        if (distance >= ON_OFF_RANGE) {
          Animated.timing(visibleAnimationValue, {
            toValue: windowHeight,
            duration: 200,
            useNativeDriver: false
          }).start();
        } else {
          Animated.timing(visibleAnimationValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
          }).start();
        }
      } else {
        if (distance >= -ON_OFF_RANGE) {
          Animated.timing(visibleAnimationValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
          }).start();
        }
      }
    }
  });


  const handleClose = () => {
    Animated.timing(visibleAnimationValue, {
      toValue: windowHeight,
      duration: 200,
      useNativeDriver: false
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dimmed} onPress={handleClose} />
      <Animated.View
        manipulationModes={["translateY"]}
        {...panResponder.panHandlers}
        style={[
          styles.contentWrap,
          {
            paddingBottom: 35 + insets.bottom,
            height: windowHeight - (62 + insets.top)
          },
          visibleAnimationStyle
        ]}>
        <View style={{paddingTop: 15}}>
          <TouchableOpacity style={styles.topBarBtn} onPress={handleClose}>
            <View style={styles.topBar} />
          </TouchableOpacity>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>댓글 (300)</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems: "center"
  },
  dimmed: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.65)"
  },
  topBarBtn: {
    paddingBottom: 14,
    marginBottom: 20,
    alignSelf: "center",
    width: 58
  },
  topBar: {
    height: 4,
    borderRadius: 2,
    backgroundColor: "#e1e1e1"
  },
  contentWrap : {
    position: "absolute",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#fff",
    borderTopRightRadius: 33,
    borderTopLeftRadius: 33,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -2
    },
    bottom: 0,
    shadowRadius: 8,
    shadowOpacity: 1,
    zIndex: 1
  },
  titleWrap : {
    paddingHorizontal : 16,
  },
  title: {
    fontSize : 20
  }
})
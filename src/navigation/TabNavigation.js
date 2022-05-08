
import React from "react"
import {Text} from "react-native"

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Home from "../screens/HomeScreen"
import HelloWorld from "../screens/HelloWorldScreen"


const {Navigator,Screen} = createBottomTabNavigator();

export default function TabNavigation(){
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          return (
            <Text>
              {route.name}
            </Text>
          )
        }
      })}
    >
      <Screen name="Home" component={Home} options={{headerShown: false}}  />
      <Screen name="HelloWorld" component={HelloWorld} options={{headerShown: false}}  />
    </Navigator>
  )
}
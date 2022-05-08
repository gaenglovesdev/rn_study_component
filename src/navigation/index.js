import React from "react"
import {View} from "react-native"

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"


import routes from "./routes"
import Home from "../screens/HomeScreen"

const {Navigator,Screen} = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <Navigator initialRouteName="App" screenOptions={{headerShown: false}}>
        {
          routes.map((route,idx) => <Screen key={`screen-${route.name}-${idx}`} {...route}/>)
        }
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
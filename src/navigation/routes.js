import {TransitionSpecs, CardStyleInterpolators} from "@react-navigation/stack";

const transitions = {
  fade: {
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec
    },
    cardStyleInterpolator: ({current}) => ({
      cardStyle: {
        opacity: current.progress
      }
    })
  },
  fromToRight: {
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }
};

const routes = [
  {
    name : "App",
    component: require("./TabNavigation").default,
    options: {...transitions.fromToRight}
  },
  {
    name : "Home",
    component: require("../screens/HomeScreen").default,
    options: {...transitions.fromToRight}
  },
  {
    name : "HelloWorld",
    component: require("../screens/HelloWorldScreen").default,
    options: {...transitions.fromToRight}
  },
  {
    name : "Detail",
    component: require("../screens/DetailScreen").default,
    options: {...transitions.fromToRight}
  }
]

export default routes;